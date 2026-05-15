# 第13章 异步JavaScript

## 事件循环 (Event Loop)

- JavaScript 是单线程的
- 异步操作通过回调队列（宏任务/微任务）实现
- **宏任务**：setTimeout、setInterval、I/O、UI 渲染
- **微任务**：Promise.then/catch/finally、queueMicrotask、MutationObserver
- 每轮事件循环：执行一个宏任务 → 清空所有微任务 → 可能渲染 UI

## Promise

```js
// 创建
new Promise((resolve, reject) => {
  if (success) resolve(data);
  else reject(error);
});

// Promise 组合器
Promise.all([p1, p2])          // 全部成功 → 结果数组；任一失败 → reject
Promise.allSettled([p1, p2])   // 全部完成（无论成败）→ 状态数组 (ES2020)
Promise.race([p1, p2])         // 第一个完成的（无论成败）
Promise.any([p1, p2])          // 第一个成功的；全失败 → AggregateError (ES2021)
Promise.resolve(value)
Promise.reject(error)
```

### Promise 链
```js
fetch(url)
  .then(res => res.json())
  .then(data => process(data))
  .catch(err => handle(err))
  .finally(() => cleanup());  // ES2018
```

## async/await (ES2017)

```js
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
```
- `async` 函数始终返回 Promise
- `await` 暂停执行直到 Promise 完成
- 错误处理用 `try/catch`
- 顶层 `await`（ES2022，模块中）

## 异步生成器 (ES2018)

```js
async function* fetchPages(urls) {
  for (const url of urls) {
    const res = await fetch(url);
    yield res.json();
  }
}
```

## 并发模式

```js
// 串行执行
for (const url of urls) { await fetch(url); }

// 并行执行
await Promise.all(urls.map(url => fetch(url)));

// 受控并发（限制并发数）
async function parallelLimit(tasks, limit) { /* ... */ }

// AbortController — 取消 fetch (ES2018)
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);
try {
  const res = await fetch(url, { signal: controller.signal });
} catch (err) {
  if (err.name === 'AbortError') console.log('请求被取消');
}
```

## 容易弄错的点

1. **Promise 构造器中的错误必须用 reject 或 catch 处理**，否则会静默丢失（未处理的 rejection）
   ```js
   new Promise(() => { throw new Error('oops'); });
   // 没有 .catch() → 错误被吞掉！（Node 中会触发 unhandledRejection）
   ```

2. **`async` 函数中的同步错误会自动转为 rejected Promise**：`async function f() { throw 1; }` 等价于 `Promise.reject(1)`

3. **`await` 的微任务顺序**：`await` 之后的代码在微任务中执行。多个 `await` 不会并行执行——若需并行，使用 `Promise.all`

4. **在 `forEach` 或 `map` 中使用 `async/await` 不能阻住外层循环**：
   ```js
   [1,2,3].forEach(async (n) => { await delay(100); console.log(n); });
   // 不会等！三次几乎同时触发
   // 正确做法：for (const n of [1,2,3]) { await delay(100); }
   ```

5. **`.catch()` 返回新的 resolved Promise**（除非 catch 又抛出）：这意味着 `.catch()` 之后的 `.then()` 仍会执行

6. **`Promise.race` 不会取消其他请求**：第一个完成之后，其余 Promise 仍在后台运行。若需取消，需用 `AbortController`

7. **微任务优先于宏任务**：`Promise.resolve().then(fn)` 的执行时机早于 `setTimeout(fn, 0)`

8. **忘记 `await` 不会报错**：`async function` 中忘记写 `await` 会导致拿到 Promise 对象而非实际值，且不会等待完成——这种 bug 很难发现
   ```js
   const data = fetch(url);  // data 是 Promise! 忘记 await 了
   console.log(data);        // Promise { <pending> }
   ```
