# core — 函数基础

函数声明、属性、参数、call/apply/bind、构造函数与常见模式。

```
core/
├── 函数.md
└── code/
    ├── declaration-*.js      # 声明、提升、IIFE
    ├── properties-*.js       # name、length、caller、toString
    ├── params-*.js           # 默认参数、arguments、rest、箭头函数
    ├── call-*.js             # apply、bind、polyfill、trace
    ├── constructor-new.js
    ├── new-function.js
    ├── overload-by-length.js
    ├── recursion-*.js
    └── pattern-*.js          # 记忆化、链式调用、可迭代对象
```

## 文档

| 文件 | 说明 |
|------|------|
| [函数.md](函数.md) | Function 对象属性与方法、`new Function`、参数要点 |

## 代码（code/）

### 声明与提升

| 文件 | 说明 |
|------|------|
| [declaration-hoisting.js](code/declaration-hoisting.js) | 函数声明 vs 表达式提升 |
| [declaration-iife.js](code/declaration-iife.js) | 立即执行函数表达式 |
| [declaration-block-fn.js](code/declaration-block-fn.js) | 块内函数声明 |

### 属性

| 文件 | 说明 |
|------|------|
| [properties-name.js](code/properties-name.js) | `Function.name` |
| [properties-length.js](code/properties-length.js) | `Function.length` 与默认参数 |
| [properties-caller.js](code/properties-caller.js) | `Function.caller`（已废弃） |
| [properties-to-string.js](code/properties-to-string.js) | `toString` / `valueOf` |
| [overload-by-length.js](code/overload-by-length.js) | 按实参个数分发重载 |

### 参数

| 文件 | 说明 |
|------|------|
| [params-default.js](code/params-default.js) | 默认参数多种写法（原注释示例已整理为可运行 demo） |
| [params-scope.js](code/params-scope.js) | 参数独立作用域 |
| [params-arguments.js](code/params-arguments.js) | `arguments` 与命名参数分离 |
| [params-rest-spread.js](code/params-rest-spread.js) | 剩余参数与展开 |
| [params-arrow.js](code/params-arrow.js) | 箭头函数 this / 返回值简写 |

### call / apply / bind

| 文件 | 说明 |
|------|------|
| [call-apply.js](code/call-apply.js) | `apply` 求数组最大值 |
| [call-bind.js](code/call-bind.js) | `bind` 固定 this 与偏函数 |
| [call-bind-polyfill.js](code/call-bind-polyfill.js) | `bind` 简易实现与 `new` 兼容 |
| [call-trace.js](code/call-trace.js) | 简易 `call` 与方法追踪 |

### 构造与动态创建

| 文件 | 说明 |
|------|------|
| [constructor-new.js](code/constructor-new.js) | `new` 与构造函数 |
| [new-function.js](code/new-function.js) | `new Function` 与 `[[Environment]]` |

### 递归

| 文件 | 说明 |
|------|------|
| [recursion-references.js](code/recursion-references.js) | `this` / 具名表达式 / `arguments.callee` |
| [recursion-factorial.js](code/recursion-factorial.js) | 阶乘与函数引用置空 |
| [recursion-tco.js](code/recursion-tco.js) | 尾调用、accumulator、trampoline、迭代 |

### 模式

| 文件 | 说明 |
|------|------|
| [pattern-memoization.js](code/pattern-memoization.js) | 函数记忆化 |
| [pattern-function-store.js](code/pattern-function-store.js) | 函数 id 注册表 |
| [pattern-method-chaining.js](code/pattern-method-chaining.js) | 链式调用 |
| [pattern-iterable.js](code/pattern-iterable.js) | `Symbol.iterator` 斐波那契 |
| [pattern-flat.js](code/pattern-flat.js) | 递归 `flat` |
| [is-function.js](code/is-function.js) | 判断是否为函数 |

## 迁出说明

| 原文件 | 去向 |
|--------|------|
| `generate-fn*.js` | [generators/生成器/basic-sequences.js](../generators/生成器/basic-sequences.js) |
| `this.js` 中 this 丢失 | [this-binding/](../this-binding/) |

运行全部示例：

```bash
for f in code/*.js; do node "$f"; done
```
