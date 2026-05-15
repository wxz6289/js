# 1.11 Promise, async/await

## 回调的问题

- 回调地狱（层层嵌套的 `callback`）
- 控制反转（将回调交给第三方，不知道是否会被调用、何时调用、调用几次）

## Promise 基础

```js
let promise = new Promise((resolve, reject) => {
  // executor — 立即执行
  if (success) resolve(result);
  else reject(error);
});
```

Promise 对象状态：
- **pending** — 初始状态
- **fulfilled** (resolved) — `resolve(value)` 被调用
- **rejected** — `reject(error)` 被调用
- 状态一旦改变就固定，不可逆转

## then / catch / finally

```js
promise
  .then(
    result => console.log(result),  // onFulfilled
    error => console.log(error)      // onRejected (可选)
  )
  .catch(error => console.log(error))    // 等价于 .then(null, errorHandler)
  .finally(() => cleanup());             // 无论结果如何都执行 (ES2018)
```
- `.then` 返回新的 Promise
- `.catch` 捕获链中任何位置的 rejection
- `.finally` 不接收参数，不改变结果传递

## Promise 链与错误传播

```js
fetch(url)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then(data => process(data))
  .catch(err => console.error('Caught:', err));
  // .catch 捕获前面任何步骤的错误
```

## Promise API

```js
// 并行执行
Promise.all([p1, p2, p3])             // 全成功→结果数组；任一失败→reject
Promise.allSettled([p1, p2, p3])      // 全完成→状态数组 (ES2020)
// [
//   {status: "fulfilled", value: result},
//   {status: "rejected", reason: error}
// ]

// 竞态
Promise.race([p1, p2, p3])            // 第一个完成的（无论成败）
Promise.any([p1, p2, p3])             // 第一个成功的；全失败→AggregateError (ES2021)

// 快捷方法
Promise.resolve(value)                 // 创建 resolved promise
Promise.reject(error)                  // 创建 rejected promise
```

## Promisification

```js
// 将回调风格的函数转为返回 Promise
function promisify(f) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      f.call(this, ...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

// Node.js 内置 util.promisify
const fs = require('fs');
const stat = util.promisify(fs.stat);
```

## 微任务队列 (Microtask Queue)

```js
Promise.resolve().then(() => console.log("micro"));
console.log("sync");
// 输出顺序: sync → micro
```
- Promise .then/catch/finally 的回调放入**微任务队列**
- 微任务在当前宏任务结束、下一个宏任务开始前执行
- `queueMicrotask(fn)` 直接添加微任务

## async/await (ES2017)

```js
async function fetchUser() {
  try {
    let response = await fetch('/api/user');
    let user = await response.json();
    return user;  // 自动包装为 Promise
  } catch (err) {
    console.log('Failed:', err);
  }
}

// async 函数始终返回 Promise
fetchUser().then(user => console.log(user));
```

## 错误处理最佳实践

```js
// 1. 不要忘记处理 rejection
promise.catch(console.error);  // 至少记录错误

// 2. async/await 中用 try/catch
async function safeLoad() {
  try { return await load(); }
  catch { return defaultValue; }
}

// 3. 包装 async 函数的安全执行
async function safeExecute(fn) {
  try { return await fn(); }
  catch (err) {
    console.error(err);
    return null;
  }
}
```

## 常见模式

```js
// 串行执行
for (const task of tasks) { await task(); }

// 并行执行
await Promise.all(tasks.map(t => t()));

// 超时竞态
const result = await Promise.race([
  fetch(url),
  new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 5000))
]);

// 重试
async function retry(fn, maxAttempts = 3) {
  for (let i = 0; i < maxAttempts; i++) {
    try { return await fn(); }
    catch (err) { if (i === maxAttempts - 1) throw err; }
  }
}
```
