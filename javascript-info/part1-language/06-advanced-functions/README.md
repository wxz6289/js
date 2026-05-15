# 1.6 函数进阶内容

## 递归与调用栈

```js
function pow(x, n) {
  if (n == 1) return x;
  return x * pow(x, n - 1);
}
```
- 递归深度受限于调用栈大小（约 10000）
- 任何递归都可以用循环+栈数据结构改写为迭代

## Rest（剩余）参数

```js
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10
```
- `...args` 是真数组，不是类数组对象
- 必须放在参数列表的最后

## Spread（展开）语法

```js
Math.max(...[1, 2, 3]);          // Math.max(1, 2, 3)
let merged = [0, ...arr, 4, 5];  // 合并数组
let copy = { ...obj };           // 浅拷贝对象
```

## 作用域与闭包 (Closure)

**词法环境（Lexical Environment）** = 环境记录（存储本地变量）+ 对外部词法环境的引用。

```js
function makeCounter() {
  let count = 0;
  return function() { return ++count; };
}
let counter = makeCounter();
counter(); // 1
counter(); // 2
// 每次 makeCounter() 调用创建新的词法环境
```

**闭包**：函数记住并访问其词法环境的能力，即使函数在其词法环境之外执行。

### 经典陷阱
```js
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i)); // 10个10！
}
// 修复：用 let 替代 var（块作用域）
// 或：for (var i = 0; i < 10; i++) { ((j) => setTimeout(...))(i); }
```

## var 的旧式行为

- `var` 没有块作用域（函数作用域）
- `var` 声明被提升（hoisted）到函数顶部
- `var` 允许重复声明
- 在全局用 `var` 声明的变量成为 window 的属性
- IIFE 的由来：`(function() { var private = 1; })();`

## 函数对象与 NFE

```js
function sayHi() { console.log("Hi"); }
sayHi.name;       // "sayHi"  (函数名)
sayHi.length;     // 0       (参数个数，不含默认值和...rest)

// NFE (Named Function Expression) — 内部可靠引用自身
let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // 即使 sayHi 被覆盖，内部 func 仍可用
  }
};
```

## new Function

```js
let fn = new Function('a', 'b', 'return a + b');
fn(1, 2); // 3

// 特殊行为：[[Environment]] 指向全局词法环境
// 不能访问定义时的局部变量（安全性考虑）
```

## 调度：setTimeout / setInterval

```js
let timerId = setTimeout(fn, delay, arg1, arg2...);
clearTimeout(timerId);

let intervalId = setInterval(fn, interval);
clearInterval(intervalId);

// 递归 setTimeout 替代 setInterval（保证间隔固定）
let timer = setTimeout(function tick() {
  doWork();
  timer = setTimeout(tick, 1000);
}, 1000);
```
- 零延迟 `setTimeout(fn, 0)` 在当前代码执行完后调度（最小延迟 ~4ms）
- 浏览器中嵌套定时器有最小延迟限制

## 装饰器 (Decorator) 与 call/apply

```js
// 透明缓存装饰器
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) return cache.get(x);
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

// call — 显式设置 this
func.call(context, arg1, arg2, ...);

// apply — 以数组形式传参（已过时，用展开替代）
func.apply(context, args);  // 等价于 func.call(context, ...args);
```

## 函数绑定 bind

```js
let bound = func.bind(context, arg1, arg2...);
// 1. 绑定 this
// 2. 部分应用（柯里化）—— 固定部分参数
function mul(a, b) { return a * b; }
let double = mul.bind(null, 2);
double(3); // 6
```

### this 丢失的经典场景
```js
let user = {
  name: "John",
  sayHi() { console.log(this.name); }
};
setTimeout(user.sayHi, 1000); // undefined! this 丢失了
// 解决：
setTimeout(() => user.sayHi(), 1000);  // 箭头函数包装
setTimeout(user.sayHi.bind(user), 1000); // bind 绑定
```

## 箭头函数再探

- 没有自己的 `this` — 从外层继承（非常适合回调）
- 没有 `arguments` 对象
- 不能用 `new` 调用
- 没有 `super`
- 适合：简短回调、需要外层 this 的场景
- 不适合：对象方法、需要动态 this 的场景
