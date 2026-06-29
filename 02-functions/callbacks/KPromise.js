/**
 * Promise/A+ 兼容的 Promise 实现（学习用）
 *
 * 公开 API
 * - 实例：then / catch / finally
 * - 静态：resolve / reject / all / race / allSettled / any / try / deferred
 *
 * @see https://promisesaplus.com/
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

/** 内部构造标记，跳过 executor 校验与执行 */
const INTERNAL = Symbol('KPromise.internal');

const isFunction = (fn) => typeof fn === 'function';

const isObjectOrFunction = (x) =>
  x !== null && (typeof x === 'object' || typeof x === 'function');

const passThrough = (value) => value;

const rethrow = (reason) => {
  throw reason;
};

/** 微任务调度，对齐原生 Promise 异步语义 */
const scheduleMicrotask =
  typeof queueMicrotask === 'function'
    ? queueMicrotask
    : typeof process !== 'undefined' && process.nextTick
      ? process.nextTick
      : (fn) => setTimeout(fn, 0);

class KPromise {
  static get [Symbol.species]() {
    return this;
  }

  #state = PENDING;
  #value = undefined;
  #reason = undefined;
  #handlers = [];

  constructor(executor) {
    if (executor === INTERNAL) return;

    if (!isFunction(executor)) {
      throw new TypeError('Promise executor must be a function');
    }

    KPromise.#runExecutor(this, executor);
  }

  then(onFulfilled, onRejected) {
    const C = this.constructor;
    const child = new C(INTERNAL);

    KPromise.#enqueue(
      this,
      child,
      isFunction(onFulfilled) ? onFulfilled : passThrough,
      isFunction(onRejected) ? onRejected : rethrow,
    );

    return child;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  /**
   * 无论 fulfill / reject 均执行 onFinally，并透传原结果
   */
  finally(onFinally) {
    const C = this.constructor;
    const handler = isFunction(onFinally) ? onFinally : () => {};

    return this.then(
      (value) => C.resolve(handler()).then(() => value),
      (reason) =>
        C.resolve(handler()).then(() => {
          throw reason;
        }),
    );
  }

  static #runExecutor(promise, executor) {
    let settled = false;

    const resolve = (value) => {
      if (settled) return;
      settled = true;
      KPromise.#resolvePromise(promise, value);
    };

    const reject = (reason) => {
      if (settled) return;
      settled = true;
      KPromise.#rejectPromise(promise, reason);
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  static #resolvePromise(promise, value) {
    if (promise.#state !== PENDING) return;

    const C = promise.constructor;

    if (value === promise) {
      return KPromise.#rejectPromise(
        promise,
        new TypeError('Cannot resolve promise with itself'),
      );
    }

    if (value instanceof C) {
      value.then(
        (v) => KPromise.#resolvePromise(promise, v),
        (err) => KPromise.#rejectPromise(promise, err),
      );
      return;
    }

    let then;
    try {
      then = isObjectOrFunction(value) && value.then;
    } catch (err) {
      return KPromise.#rejectPromise(promise, err);
    }

    if (isFunction(then)) {
      let called = false;
      try {
        then.call(
          value,
          (y) => {
            if (called) return;
            called = true;
            KPromise.#resolvePromise(promise, y);
          },
          (err) => {
            if (called) return;
            called = true;
            KPromise.#rejectPromise(promise, err);
          },
        );
      } catch (err) {
        if (!called) KPromise.#rejectPromise(promise, err);
      }
      return;
    }

    KPromise.#fulfill(promise, value);
  }

  static #fulfill(promise, value) {
    if (promise.#state !== PENDING) return;
    promise.#state = FULFILLED;
    promise.#value = value;
    KPromise.#drainHandlers(promise);
  }

  static #rejectPromise(promise, reason) {
    if (promise.#state !== PENDING) return;
    promise.#state = REJECTED;
    promise.#reason = reason;
    KPromise.#drainHandlers(promise);
  }

  static #enqueue(parent, child, onFulfilled, onRejected) {
    const run = () => {
      scheduleMicrotask(() => {
        const fulfilled = parent.#state === FULFILLED;
        const x = fulfilled ? parent.#value : parent.#reason;
        const handler = fulfilled ? onFulfilled : onRejected;
        KPromise.#invokeHandler(child, handler, x);
      });
    };

    if (parent.#state === PENDING) {
      parent.#handlers.push(run);
    } else {
      run();
    }
  }

  static #invokeHandler(promise, handler, x) {
    try {
      KPromise.#resolvePromise(promise, handler(x));
    } catch (err) {
      KPromise.#rejectPromise(promise, err);
    }
  }

  static #drainHandlers(promise) {
    const handlers = promise.#handlers;
    promise.#handlers = [];
    handlers.forEach((run) => run());
  }

  static #toArray(iterable) {
    if (iterable == null) {
      throw new TypeError('Argument is not iterable');
    }
    if (Array.isArray(iterable)) return iterable;
    if (typeof iterable[Symbol.iterator] === 'function') {
      return [...iterable];
    }
    throw new TypeError('Argument is not iterable');
  }

  static resolve(value) {
    if (value instanceof this) return value;
    return new this((resolve) => resolve(value));
  }

  static reject(reason) {
    return new this((_, reject) => reject(reason));
  }

  static try(fn) {
    return new this((resolve, reject) => {
      try {
        resolve(fn());
      } catch (err) {
        reject(err);
      }
    });
  }

  static all(iterable) {
    const C = this;
    let values;
    try {
      values = KPromise.#toArray(iterable);
    } catch (err) {
      return C.reject(err);
    }

    return new C((resolve, reject) => {
      const len = values.length;
      if (len === 0) return resolve([]);

      const results = new Array(len);
      let remaining = len;

      values.forEach((item, index) => {
        C.resolve(item).then(
          (value) => {
            results[index] = value;
            if (--remaining === 0) resolve(results);
          },
          reject,
        );
      });
    });
  }

  static race(iterable) {
    const C = this;
    let values;
    try {
      values = KPromise.#toArray(iterable);
    } catch (err) {
      return C.reject(err);
    }

    return new C((resolve, reject) => {
      values.forEach((item) => {
        C.resolve(item).then(resolve, reject);
      });
    });
  }

  static allSettled(iterable) {
    const C = this;
    let values;
    try {
      values = KPromise.#toArray(iterable);
    } catch (err) {
      return C.reject(err);
    }

    return new C((resolve) => {
      const len = values.length;
      if (len === 0) return resolve([]);

      const results = new Array(len);
      let remaining = len;

      values.forEach((item, index) => {
        C.resolve(item).then(
          (value) => {
            results[index] = { status: 'fulfilled', value };
            if (--remaining === 0) resolve(results);
          },
          (reason) => {
            results[index] = { status: 'rejected', reason };
            if (--remaining === 0) resolve(results);
          },
        );
      });
    });
  }

  static any(iterable) {
    const C = this;
    let values;
    try {
      values = KPromise.#toArray(iterable);
    } catch (err) {
      return C.reject(err);
    }

    return new C((resolve, reject) => {
      const len = values.length;
      if (len === 0) {
        return reject(
          new AggregateError([], 'All promises were rejected'),
        );
      }

      const errors = new Array(len);
      let remaining = len;

      values.forEach((item, index) => {
        C.resolve(item).then(
          resolve,
          (reason) => {
            errors[index] = reason;
            if (--remaining === 0) {
              reject(
                new AggregateError(errors, 'All promises were rejected'),
              );
            }
          },
        );
      });
    });
  }

  static deferred() {
    const defer = {};
    defer.promise = new this((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    return defer;
  }
}

Object.defineProperty(KPromise.prototype, Symbol.toStringTag, {
  value: 'KPromise',
  configurable: true,
});

export default KPromise;
