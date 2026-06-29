/**
 * Promise 行为示例集
 *
 * 运行全部：node testPromise.js
 * 运行单项：node testPromise.js <name>
 *
 * 分类
 * - sync-order          同步代码与微任务执行顺序
 * - async-chain         异步 resolve 与链式返回
 * - immutable-state     状态只能变更一次
 * - chain-return        then 返回值参与下一次 then
 * - multi-then          同一 Promise 注册多个 then
 * - reject-in-then      then 中 reject / throw
 * - circular-return     返回 promise 自身导致循环引用
 * - value-pass-through  非函数参数的值穿透
 * - catch-vs-then-fail  then 第二参数无法捕获第一参数抛错
 * - then-two-handlers   已决议后 then 的双参数行为
 * - macro-micro-tasks   宏任务与微任务（Node）
 */

const demos = {
  /** 1 → 2 → 4 → 3：executor 同步执行，then 回调进微任务队列 */
  async 'sync-order'() {
    console.log('\n[sync-order]');
    const promise = new Promise((resolve) => {
      console.log(1);
      resolve();
      console.log(2);
    });
    promise.then(() => console.log(3));
    console.log(4);
    await promise;
  },

  /** resolve 后链式 then；then 内 throw 使后续变为 rejected */
  async 'async-chain'() {
    console.log('\n[async-chain]');
    const p1 = new Promise((resolve) => {
      setTimeout(() => resolve('success'), 200);
    });
    const p2 = p1.then((value) => {
      console.log('value:', value);
      throw new Error('error!');
    });
    console.log('p1 pending?', p1);
    console.log('p2 pending?', p2);
    await sleep(400);
    console.log('p1 settled:', p1);
    console.log('p2 settled:', p2);
    await p2.catch((err) => console.log('caught:', err.message));
  },

  /** 首次 resolve/reject 后，后续调用被忽略 */
  async 'immutable-state'() {
    console.log('\n[immutable-state]');
    const promise = new Promise((resolve, reject) => {
      resolve('success1');
      reject(new Error('error'));
      resolve('success2');
    });
    await promise
      .then((res) => console.log('then:', res))
      .catch((err) => console.error('catch:', err.message));
  },

  /** then 返回普通值，传递给链上下一个 then */
  async 'chain-return'() {
    console.log('\n[chain-return]');
    await Promise.resolve(1)
      .then((res) => {
        console.log(res);
        return 2;
      })
      .catch((err) => console.log(err))
      .then((res) => console.log(res));
  },

  /** 同一 Promise 可多次 then，回调均会执行 */
  async 'multi-then'() {
    console.log('\n[multi-then]');
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log('once');
        resolve('success');
      }, 200);
    });
    const start = Date.now();
    promise.then((res) => console.log(res, Date.now() - start));
    promise.then((res) => console.log(res, Date.now() - start));
    await promise;
  },

  /** return Promise.reject() 等价于抛出 rejection */
  async 'reject-in-then'() {
    console.log('\n[reject-in-then]');
    await Promise.resolve()
      .then(() => {
        throw new Error('error!');
      })
      .then((res) => console.log('then:', res))
      .catch((err) => console.error('catch:', err.message));
  },

  /** then 返回值不能是链上的 promise 自身 */
  async 'circular-return'() {
    console.log('\n[circular-return]');
    const promise = Promise.resolve().then(() => promise);
    await promise.catch((err) => console.error('catch:', err.message));
  },

  /** 非函数参数被忽略，值向下穿透 */
  async 'value-pass-through'() {
    console.log('\n[value-pass-through]');
    await Promise.resolve(1)
      .then(2)
      .then(Promise.resolve(3))
      .then(console.log);
  },

  /** catch 是 then(null, onRejected)；then 第二参数无法捕获第一参数内的 throw */
  async 'catch-vs-then-fail'() {
    console.log('\n[catch-vs-then-fail]');
    await Promise.resolve()
      .then(
        () => {
          throw new Error('error');
        },
        (e) => console.error('fail (skipped):', e.message),
      )
      .catch((e) => console.error('catch:', e.message));
  },

  /** 已决议的 Promise 上，then 双参数分别处理 fulfill / reject */
  async 'then-two-handlers'() {
    console.log('\n[then-two-handlers]');
    await Promise.resolve()
      .then(
        () => {
          throw new Error('error');
        },
        (err) => console.error('fail1:', err.message),
      )
      .then(
        (res) => console.log('success2:', res),
        (err) => console.log('fail2:', err.message),
      );
  },

  /**
   * Node 事件循环：同步 → microtask(Promise) → microtask(nextTick) → macrotask
   * 典型顺序：end → then → nextTick → timeout → setImmediate
   */
  async 'macro-micro-tasks'() {
    console.log('\n[macro-micro-tasks]');
    process.nextTick(() => console.log('nextTick'));
    setTimeout(() => console.log('timeout'), 0);
    Promise.resolve().then(() => console.log('then'));
    setImmediate(() => console.log('setImmediate'));
    console.log('end');
    await sleep(50);
  },
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function printUsage() {
  console.log('Promise 示例集');
  console.log('用法: node testPromise.js [name]\n');
  Object.keys(demos).forEach((name) => console.log(`  ${name}`));
}

const example = process.argv[2];

if (!example) {
  printUsage();
  for (const run of Object.values(demos)) {
    await run();
  }
} else if (demos[example]) {
  await demos[example]();
} else {
  console.error(`未知示例: ${example}\n`);
  printUsage();
  process.exit(1);
}
