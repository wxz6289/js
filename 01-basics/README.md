# 01-basics — 语言基础

JavaScript 语言基础笔记与实践代码。

```
01-basics/
├── docs/           # 学习笔记
└── code/           # 可运行示例（23 个）
    ├── grammar.js
    ├── variables/  # 声明、作用域、闭包
    ├── types/      # 内置类型、JSON、日期
    └── statements/ # 条件、跳转、with
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

### 词法

| 文件 | 说明 |
|------|------|
| [grammar.js](code/grammar.js) | eval 隐式返回值、原始类型不可扩展 |

### 变量（variables/）

| 文件 | 说明 |
|------|------|
| [global.js](code/variables/global.js) | 严格模式下全局变量 |
| [hoisting.js](code/variables/hoisting.js) | var 提升、函数声明、无块作用域 |
| [block-scope.js](code/variables/block-scope.js) | let/const 块作用域、默认参数 TDZ |
| [closure-in-loop.js](code/variables/closure-in-loop.js) | 循环闭包：var / IIFE / let / for...in / for...of |

### 类型（types/）

| 文件 | 说明 |
|------|------|
| [getType.js](code/types/getType.js) | 从构造函数提取类型名 |
| [typeof-tdz.js](code/types/typeof-tdz.js) | typeof 与临时死区 |
| [string-primitive.js](code/types/string-primitive.js) | 原始类型字符串不可扩展 |
| [string-methods.js](code/types/string-methods.js) | endsWith / startsWith 参数 |
| [string-truncate.js](code/types/string-truncate.js) | 字符串截断 |
| [bool-double-not.js](code/types/bool-double-not.js) | `!!` 布尔转换 |
| [bool-iif.js](code/types/bool-iif.js) | IIFE 与一元运算符 |
| [bool-gradient-color.js](code/types/bool-gradient-color.js) | RGB 渐变色生成 |
| [getLastDayOfMonth.js](code/types/getLastDayOfMonth.js) | 日期计算与相对时间 |
| [json-parse.js](code/types/json-parse.js) | JSON.parse 与 reviver |
| [json-circular-ref.js](code/types/json-circular-ref.js) | 循环引用 |
| [json-stringify-replacer.js](code/types/json-stringify-replacer.js) | replacer 过滤序列化 |
| [json-stringify-unsafe.js](code/types/json-stringify-unsafe.js) | undefined / 函数的序列化 |
| [json-toJSON.js](code/types/json-toJSON.js) | 自定义 toJSON |

### 语句（statements/）

| 文件 | 说明 |
|------|------|
| [if-block.js](code/statements/if-block.js) | if/else 与块作用域 |
| [switch-default.js](code/statements/switch-default.js) | switch 穿透与 default 位置 |
| [label.js](code/statements/label.js) | 标签语句 |
| [with.js](code/statements/with.js) | with 作用域与声明泄漏 |

运行示例：

```bash
node 01-basics/code/variables/closure-in-loop.js
```
