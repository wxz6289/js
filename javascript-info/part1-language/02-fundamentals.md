# 1.2 JavaScript 基础知识

## 代码结构

- 语句以分号结尾（ASI 会自动插入，但不建议依赖）
- 单行注释 `//`、多行注释 `/* */`
- 现代 JS 支持 `"use strict"` 严格模式

## 变量

```js
let user = 'John';      // 现代变量声明
const BIRTHDAY = '1990'; // 常量（不可重新赋值）
var oldStyle = 'legacy'; // 旧式（函数作用域，有提升）
```

**命名规则**：

- 字母、数字、`$`、`_`，首字符不能是数字
- 驼峰命名 `myVeryLongName`
- 大小写敏感
- 非拉丁字母允许但不推荐
- 保留字不能用作变量名

## 数据类型

8种基本类型：

- `number` — 整数和浮点数，`Infinity`/`-Infinity`/`NaN`
- `bigint` — 任意精度整数，后缀 `n`
- `string` — 单引号/双引号/反引号（模板字符串 `${...}`）
- `boolean` — `true`/`false`
- `null` — "空"值，`typeof null === "object"` (bug)
- `undefined` — 未赋值
- `symbol` — 唯一标识符
- `object` — 复杂数据结构

```js
typeof undefined    // "undefined"
typeof 0            // "number"
typeof 10n          // "bigint"
typeof true         // "boolean"
typeof "foo"        // "string"
typeof Symbol("id") // "symbol"
typeof Math         // "object"
typeof null         // "object"  ← 官方承认的 bug
typeof alert        // "function"
```

## 交互

```js
alert(msg);           // 弹出消息
result = prompt(title [, default]);  // 输入框，返回字符串或 null
result = confirm(question);          // 确认框，返回 true/false
```

## 类型转换

```js
String(value)        // 字符串转换
Number(value)        // 数值转换（undefined→NaN, null→0, true→1, ""→0）
Boolean(value)       // 0/null/undefined/NaN/"" → false，其余 → true
```

## 运算符

```js
+ - * / % **    // 算术（** 是指数）
+               // 字符串连接（有字符串时）
+               // 一元加，转为数字：+"123" → 123
= += -= *= /=   // 赋值
++ --           // 递增/递减（前置返回新值，后置返回旧值）
,               // 逗号运算符，返回最后一个值
```

## 比较

```js
===    // 严格相等（类型+值）
==     // 宽松相等（会类型转换！）
> < >= <=
// 字符串按字典顺序比较（Unicode码点）
// null == undefined → true
// null > 0 → false; null == 0 → false; null >= 0 → true（特殊规则!）
```

## 条件

```js
if / else if / else
const result = condition ? value1 : value2;  // 条件（三元）运算符
switch (x) {
  case 'value': ... break;
  default: ...
}
```

## 逻辑运算符

```js
||   // 或 — 返回第一个真值，或最后一个假值（短路求值）
&&   // 与 — 返回第一个假值，或最后一个真值（短路求值）
!    // 非 — 转为布尔取反；!!value 等价于 Boolean(value)
??   // 空值合并 — 左侧是 null/undefined 时返回右侧（ES2020）
```

## 循环

```js
while (condition) { }           // 前测试循环
do { } while (condition);      // 后测试循环（至少执行一次）
for (let i = 0; i < 10; i++) {} // 最常用
for (let key in obj) {}          // 遍历对象键（含继承的可枚举属性）
for (let value of iterable) {}   // 遍历可迭代对象的值
break / continue                 // 跳出/跳过
label: for (...) { break label; } // 标签跳出多层循环
```

## 函数

```js
// 函数声明（提升 — 可在声明前调用）
function showMessage() { }

// 函数表达式（不提升）
let sayHi = function() { };

// 参数
function sum(a, b = 1) { return a + b; }  // 默认值
function f(...args) { }                     // 剩余参数（真数组）

// 返回值；无 return 或空 return 返回 undefined
```

## 函数表达式 vs 函数声明

| 函数声明 | 函数表达式 |
|---------|----------|
| 可提升，声明前可用 | 不提升 |
| 严格模式下可见于块内 | 赋值给变量，变量作用域规则 |

## 箭头函数

```js
let sum = (a, b) => a + b;
let double = n => n * 2;         // 单参数可省略括号
let sayHi = () => alert("Hi");   // 无参数需空括号
let multiline = (a, b) => {      // 多行需大括号+return
  let result = a + b;
  return result;
};
```

- 没有自己的 `this`（继承外层）
- 没有 `arguments`
- 不能用作构造函数
