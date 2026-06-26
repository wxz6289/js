# 01-basics — 语言基础

JavaScript 语言基础笔记与实践代码。

```
01-basics/
├── docs/    # 学习笔记
└── code/    # 可运行示例（27 个）
```

## 文档（docs/）

| 主题 | 文件 | 说明 |
|------|------|------|
| 词法 | [grammar.md](docs/grammar.md) | 词法结构、表达式与语句、ASI |
| 变量 | [声明与提升.md](docs/声明与提升.md) | var / let / const、提升、TDZ、块级作用域 |
| 类型 | [types.md](docs/types.md) | 内置类型、Number/String/Date、类型转换、JSON、值与引用 |
| 运算符 | [运算符.md](docs/运算符.md) | 表达式、运算符分类、优先级与结合性 |
| 语句 | [语句.md](docs/语句.md) | 条件/循环/跳转、标签、try/catch、with |

## 代码（code/）

| 主题 | 文件 | 说明 |
|------|------|------|
| 词法 | [grammar.js](code/grammar.js) | eval 与隐式返回值 |
| 变量 | [global.js](code/global.js) | 全局变量 |
| 变量 | [fn-in-loop.js](code/fn-in-loop.js) | 循环中的函数 |
| 变量 | [let-for.js](code/let-for.js) | for 循环与 let |
| 变量 | [var-var.js](code/var-var.js) 等 | var / let / for 对比（`var-*.js`） |
| 类型 | [getType.js](code/getType.js) | 类型检测 |
| 类型 | [typeof-var.js](code/typeof-var.js) | typeof 与未声明变量 |
| 类型 | [string.js](code/string.js) | 字符串示例 |
| 类型 | [bool-*.js](code/bool-or.js) | 布尔转换与技巧 |
| 类型 | [getLastDayOfMonth.js](code/getLastDayOfMonth.js) | 日期计算 |
| 类型 | [json-*.js](code/json-parse.js) | JSON 序列化与循环引用 |
| 类型 | [string-truncate.js](code/string-truncate.js) | 字符串截断 |
| 语句 | [if-block.js](code/if-block.js) | if 块作用域 |
| 语句 | [label.js](code/label.js) | 标签语句 |
| 语句 | [switch-default.js](code/switch-default.js) | switch default |
| 语句 | [with.js](code/with.js) | with 语句 |

运行示例：

```bash
node 01-basics/code/grammar.js
```
