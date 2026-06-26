# JavaScript 实践实验室

一个结构化的 JavaScript 学习笔记、练习题与实践代码合集，涵盖从基础到高级的主题。

## 目录结构

### 01-basics — 语言基础

`docs/`（笔记）与 `code/`（示例）；`code/` 按主题分为 `variables/`、`types/`、`statements/`。

详见 [01-basics/README.md](01-basics/README.md)。

### 02-functions — 函数
- **core/** — 声明、表达式、参数、IIFE、构造函数、name/length/caller
- **closures/** — 闭包、词法作用域、块级作用域
- **this-binding/** — 4 种绑定规则、箭头函数、call/apply/bind
- **iterators/** — Iterable/Iterator 协议、自定义可迭代对象
- **generators/** — yield、暂停/恢复、passValue
- **decorators/** — 防抖（前缘 + 后缘）、节流（简单 + 智能）、spy、delay
- **currying/** — 函数柯里化与偏函数应用
- **callbacks/** — 回调模式、Promise 实现原理
- **fn-prototype/** — 函数原型属性与方法

### 03-objects — 对象与原型
- **objects/** — 创建、属性描述符、getter/setter、枚举
- **map-set/** — Map、Set、WeakMap、WeakSet
- **prototypes/** — 原型链、6 种继承模式
- **class/** — ES6 class 语法、extends、static、私有字段
- **proxy-reflect/** — ES6 Proxy 与 Reflect API
- **mixin/** — Mixin 模式

### 04-async — 异步编程
- **promise/** — Promise API、链式调用、组合器（all/race/allSettled/any）
- **async-await/** — async/await、异步生成器、asyncify
- **timers/** — setTimeout、setInterval、requestAnimationFrame

### 05-modules — 模块系统
ES Modules + CommonJS：命名/默认导出、动态 import、循环依赖

### 06-browser — 浏览器平台
- **dom/** — DOM API 与操作
- **event-loop/** — 浏览器事件循环
- **client-storage/** — Cookie、LocalStorage、SessionStorage、IndexedDB
- **multithreading/** — Web Worker、Shared Worker、Service Worker、Atomics、SharedArrayBuffer
- **rendering/** — 渲染管线、RAF、RIC、性能优化、Fetch API
- **script-loading/** — defer/async、动态脚本加载
- **gc/** — 标记清除、引用计数
- **cross-platform/** — 运行时/平台检测策略

### 07-patterns — 设计模式与算法
- **creational/** — 工厂、抽象工厂、建造者、原型、单例
- **structural/** — 适配器、组合、装饰器、外观、模块
- **behavioral/** — 责任链、中介者、代理
- **algorithms/** — 快速排序、基数排序、零钱兑换、类 Redux store

### 08-metaprogramming — 元编程
Symbol、new.target、toPrimitive、知名 Symbol

### 09-regex — 正则表达式与编码
正则表达式全面参考、Unicode 字符编码

### 10-webassembly — WebAssembly
WASM 基础、AssemblyScript 示例

### 11-utils — 工具函数
代码片段：sleep、call 垫片、debounce、throttle、版本比较等

### 12-arrays — 数组操作
数组创建、遍历、搜索、排序、去重

### 14-strict-mode — 严格模式
严格模式规则与行为

### 15-examples — 综合示例
跨主题的 HTML + JS 示例

### JavaScript权威指南 — 书籍笔记（第 7 版）
《JavaScript 权威指南》（第 7 版，2020）完整逐章学习笔记
- **ch01-简介** — 语言概览、版本历史（ES3→ES2020）
- **ch02-词法结构** — Unicode、标识符、注释、ASI
- **ch03-类型值和变量** — 7 种原始类型、类型转换、解构
- **ch04-表达式与运算符** — 运算符优先级表、各类运算符
- **ch05-语句** — 条件、循环、跳转、严格模式（`code/`）
- **ch06-对象** — 创建、属性描述符、getter/setter、枚举
- **ch07-数组** — 栈/队列方法、遍历、搜索/排序、类型化数组
- **ch08-函数** — 定义、调用模式、闭包、记忆化（`code/`）
- **ch09-类** — class 语法、继承、私有字段、instanceof
- **ch10-模块** — ES Modules 与 CommonJS、动态 import、HTML 集成
- **ch11-标准库** — Set/Map/WeakMap、TypedArrays、Date、JSON、Intl、URL（`code/`）
- **ch12-迭代器与生成器** — Iterable 协议、生成器、异步迭代
- **ch13-异步JavaScript** — 事件循环、Promise 组合器、async/await
- **ch14-元编程** — 知名 Symbol、Proxy/Reflect、new.target
- **ch15-浏览器中的JavaScript** — DOM、事件、存储、Worker、渲染
- **ch16-Node.js中的JavaScript** — 核心模块、CommonJS、npm、EventEmitter
- **ch17-工具与扩展** — Babel、TypeScript、打包工具、Linter、Source Map

### javascript-info — 教程参考（zh.javascript.info）
按该网站三部分课程体系整理的参考笔记：
- **part1-language/** — 13 个章节：基础、对象、数据类型、高级函数、原型、类、错误处理、Promise、生成器、模块
- **part2-browser/** — 6 个章节：Document、事件、UI 事件、表单、加载、其他
- **part3-extra/** — 7 个章节：框架、二进制数据、网络、存储、动画、Web Components、正则

### notebooks — Jupyter 笔记本
所有 `.nnb` 笔记本文件集中存放，便于浏览
