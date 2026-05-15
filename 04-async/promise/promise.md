# Promise

异步任务结果的占位符，表示暂时还没有获得但将来会获得的值。

内部状态

- pending 等待
- fullfilled 成功解决
- rejected 出错异常

Promise的优势

- 链式调用 避免了深度的嵌套回调

```js
let promise = new Promise(function(resolve, reject){});
```

promise内部属性：

- state —— 最初是 “pending”，然后被改为 “fulfilled” 或 “rejected”，
- result —— 一个任意值，最初是 undefined。
当 executor 完成任务时，应调用下列之一：
- resolve(value) —— 说明任务已经完成：
  - 将 state 设置为 "fulfilled"，
  - sets result to value。
- reject(error) —— 表明有错误发生：
  - 将 state 设置为 "rejected"，
  - 将 result 设置为 error。

API

- resolve()
- reject()
- all()
- allSettled()
- race()

未处理的rejections在浏览器端可以监听`unhandledrejection`事件进行捕获
