/**
 * Promise/A+ 风格实现（学习用，偏经典教程写法）
 *
 * @see https://malcolmyu.github.io/2015/06/12/Promises-A-Plus/
 * @see https://promisesaplus.com/
 *
 * 测试：npm i -g promises-aplus-tests && promises-aplus-tests TPromise.js
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

const isFunction = (fn) => typeof fn === 'function';

const passThrough = (value) => value;

const rethrow = (reason) => {
  throw reason;
};

/** 异步执行回调，满足 A+ 2.2.4：onFulfilled/onRejected 应在全新调用栈中运行 */
const asyncRun = (fn) => setTimeout(fn);

class TPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined; // fulfilled 终值
    this.reason = undefined; // rejected 拒因
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // resolve 接收的 value 可能是：普通值 / Promise 实例 / thenable
    const resolve = (value) => {
      if (value instanceof TPromise) {
        return value.then(resolve, reject);
      }

      // resolve/reject 内使用 setTimeout，确保 then 回调异步执行（A+ 2.2.4 / 2.2.6）
      asyncRun(() => {
        if (this.status !== PENDING) return;
        this.status = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach((cb) => cb(this.value));
      });
    };

    const reject = (reason) => {
      asyncRun(() => {
        if (this.status !== PENDING) return;
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((cb) => cb(this.reason));
      });
    };

    // executor 同步抛错时，等价于 reject
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  /**
   * @param {Function} onFulfilled fulfilled 时执行
   * @param {Function} onRejected  rejected 时执行
   * @returns {TPromise} 新 Promise（promise2）
   */
  then(onFulfilled, onRejected) {
    onFulfilled = isFunction(onFulfilled) ? onFulfilled : passThrough;
    onRejected = isFunction(onRejected) ? onRejected : rethrow;

    // 已决议时也要 setTimeout，保证多次 then 及链式调用中的回调均为异步（A+ 2.2.6）
    if (this.status === FULFILLED) {
      const promise2 = new TPromise((resolve, reject) => {
        asyncRun(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      });
      return promise2;
    }

    if (this.status === REJECTED) {
      const promise2 = new TPromise((resolve, reject) => {
        asyncRun(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      });
      return promise2;
    }

    // pending：暂存回调，待 resolve/reject 后统一触发
    const promise2 = new TPromise((resolve, reject) => {
      this.onFulfilledCallbacks.push((value) => {
        try {
          const x = onFulfilled(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      });
      this.onRejectedCallbacks.push((reason) => {
        try {
          const x = onRejected(reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      });
    });
    return promise2;
  }

  /** 捕获链上 rejected 状态 */
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  /** 全部 fulfill 后 resolve 为结果数组 */
  static all(promises) {
    return new TPromise((resolve, reject) => {
      const len = promises.length;
      if (len === 0) return resolve([]);

      const values = new Array(len);
      let count = 0;

      promises.forEach((item, index) => {
        TPromise.resolve(item).then(
          (value) => {
            values[index] = value;
            if (++count === len) resolve(values);
          },
          reject,
        );
      });
    });
  }

  /** 第一个 settle 的结果决定最终状态 */
  static race(promises) {
    return new TPromise((resolve, reject) => {
      promises.forEach((item) => {
        TPromise.resolve(item).then(resolve, reject);
      });
    });
  }

  static resolve(value) {
    return new TPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new TPromise((_, reject) => reject(reason));
  }

  /**
   * Deferred：持有 promise，并暴露 resolve/reject 特权方法
   * @see http://api.jquery.com/category/deferred-object/
   */
  static deferred() {
    const defer = {};
    defer.promise = new TPromise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    return defer;
  }
}

/**
 * 解析 then 回调返回值 x（promise2 的决议过程）
 * @param {TPromise} promise2 then 返回的新 Promise
 * @param {*} x onFulfilled/onRejected 的返回值
 * @param {Function} resolve promise2 的 resolve
 * @param {Function} reject promise2 的 reject
 */
function resolvePromise(promise2, x, resolve, reject) {
  // 返回 promise2 自身会导致循环引用
  if (promise2 === x) {
    return reject(new TypeError('循环引用'));
  }

  if (x instanceof TPromise) {
    if (x.status === PENDING) {
      x.then(
        (y) => resolvePromise(promise2, y, resolve, reject),
        reject,
      );
    } else {
      x.then(resolve, reject);
    }
    return;
  }

  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    let called = false;
    try {
      const then = x.then;
      if (isFunction(then)) {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (reason) => {
            if (called) return;
            called = true;
            reject(reason);
          },
        );
      } else {
        resolve(x);
      }
    } catch (err) {
      if (!called) reject(err);
    }
    return;
  }

  resolve(x);
}

export default TPromise;
