# 1.12 Generator, 高级 Iteration

## Generator 函数

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;  // done: true 时的 value
}
let gen = generateSequence();
let one = gen.next();   // { value: 1, done: false }
let two = gen.next();   // { value: 2, done: false }
let three = gen.next(); // { value: 3, done: true }
```
- `yield` 暂停执行并返回值
- `return` 使 done 变为 true
- 生成器是**一次性的**（不能重置）

## Generator 是可迭代的

```js
function* gen() { yield 1; yield 2; yield 3; }
for (let value of gen()) { console.log(value); } // 1 2 3
[...gen()]; // [1, 2, 3]
// for/of 忽略 done: true 时的 value
```

## yield* — 委托

```js
function* genSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
function* combined() {
  yield* genSequence(1, 5);
  yield* genSequence(6, 10);
}
```

## 双向通信 — generator.next(arg)

```js
function* gen() {
  let q1 = yield "2 + 2 = ?";   // 第一次 next 的参数被忽略
  console.log(q1);               // 第二次 next 传入的值
  let q2 = yield "3 * 3 = ?";
  console.log(q2);
}
let g = gen();
g.next();        // { value: "2 + 2 = ?", done: false }
g.next(4);       // 输出 4，{ value: "3 * 3 = ?", done: false }
g.next(9);       // 输出 9，{ value: undefined, done: true }
```

## generator.throw / generator.return

```js
g.throw(new Error("Oops"));   // 在 yield 处抛出错误（可在生成器内 try/catch）
g.return(value);              // 提前终止生成器 { value, done: true }
```

## 异步迭代 (Async Iteration)

### 异步可迭代对象
```js
let range = {
  from: 1, to: 5,
  [Symbol.asyncIterator]() {  // 异步迭代协议
    return {
      current: this.from,
      last: this.to,
      async next() {  // 返回 Promise<{value, done}>
        await delay(1000);
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {
  for await (let value of range) {  // for await/of
    console.log(value);
  }
})();
```

### 异步 Generator
```js
async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;
  while (url) {
    const response = await fetch(url);
    const commits = await response.json();
    yield* commits;       // 逐个 yield 提交记录
    // 解析下一页...
  }
}

// 使用
for await (let commit of fetchCommits('user/repo')) {
  console.log(commit.author.login);
}
```

## 实际应用：分页数据

```js
async function* fetchPages(baseUrl) {
  let page = 1;
  while (true) {
    let res = await fetch(`${baseUrl}?page=${page}`);
    let data = await res.json();
    if (data.length === 0) break;       // 没有更多数据
    yield data;
    page++;
  }
}
```
