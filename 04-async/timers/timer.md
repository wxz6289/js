有时我们并不想立即执行一个函数，而是等待特定一段时间之后再执行，这种做法也叫“计划调用”。
目前有两种方式可以实现：
+ setTimeout 将函数的执行推迟到一段时间之后再执行。
+ setInterval 让函数间隔一定时间周期性执行。

```js
let timerId = setTimeout(func|code, delay [, arg1, arg2, ...]);
clearTimeout(timerId)

let intervalId = setInterval(func|code, delay [, arg1, arg2, ...]);
clearInterval(intervalId)

```

递归版setTimeout
```js
/** 
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000);
}, 2000);
```
递归版的 setTimeout 其实要比 setInterval 灵活的多，采用这种方式可以根据当前执行结果来安排下一次调用。
如果不时有一些占用 CPU 的任务，我们可以通过衡量执行时间来安排下次调用是应该提前还是推迟。
递归版 setTimeout 能保证每次执行间的延时都是准确的，setInterval 却不能够。

setTimeout(func, 0)这样调度可以让 func 尽快执行，但是只有在当前代码执行完后，调度器才会对其进行调用。

分割CPU高占任务