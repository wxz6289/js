# closures — 闭包与词法作用域

词法作用域、词法环境、闭包定义与常见陷阱。

```
closures/
├── 闭包与词法作用域.md   # 学习笔记
└── code/                 # 可运行示例
    ├── block-scope.js
    ├── block-scope-fn.js
    ├── lexical-lookup.js
    ├── closure-chain.js
    ├── closure-factory.js
    └── loop-closure.js
```

## 文档

| 文件 | 说明 |
|------|------|
| [闭包与词法作用域.md](闭包与词法作用域.md) | 编译流程、LHS/RHS、词法环境、闭包定义与循环陷阱 |

## 代码（code/）

| 文件 | 主题 | 说明 |
|------|------|------|
| [block-scope.js](code/block-scope.js) | 块级作用域 | `let` / `const` 仅在 `{ }` 内可见 |
| [block-scope-fn.js](code/block-scope-fn.js) | 块级函数声明 | 块内 `function` 的提升与泄漏（历史行为） |
| [lexical-lookup.js](code/lexical-lookup.js) | 词法查找 | 最近绑定、IIFE 与外层作用域 |
| [closure-chain.js](code/closure-chain.js) | 链式闭包 | 嵌套返回对象中的 `n` 如何被闭包 |
| [closure-factory.js](code/closure-factory.js) | 闭包工厂 | 柯里化、`filter` 谓词、排序比较器 |
| [loop-closure.js](code/loop-closure.js) | 循环闭包 | `var` 陷阱与 IIFE / `let` 修复 |

## 相关目录

| 位置 | 说明 |
|------|------|
| [01-basics/code/variables/closure-in-loop.js](../../01-basics/code/variables/closure-in-loop.js) | 循环闭包完整对比（var / IIFE / let / for...in / for...of） |
| [this-binding/](../this-binding/) | `this` 绑定（原 `context.js`、`context2.js` 已迁入） |

运行示例：

```bash
node code/block-scope.js
node code/closure-factory.js
```
