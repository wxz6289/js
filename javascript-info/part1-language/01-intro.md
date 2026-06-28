# 1.1 简介 (An Introduction)

## JavaScript 引擎

- **引擎**（V8、SpiderMonkey、JavaScriptCore）解析脚本 → 编译 → 执行
- 工作流程：解析(parser) → AST → 编译为字节码/机器码 → 执行
- 现代引擎使用 JIT (Just-In-Time) 编译：先解释执行，热点代码编译优化

## 浏览器中的 JavaScript

- 原始能力仅限于操作网页内容和用户交互
- 不提供低级内存访问、多线程（除 Worker）、文件系统访问
- Node.js 提供了服务端运行时，补充了文件/网络等能力

## 规范

- ECMA-262 是正式规范
- TC39 委员会管理提案流程（Stage 0-4）
- [ECMAScript 提案](https://github.com/tc39/proposals)

## 手册

- **MDN** (developer.mozilla.org) — 最权威的 JS 参考
- **ECMA 规范** — 最精确但难读
- **javascript.info** — 最佳学习教程
- **caniuse.com** — 浏览器兼容性查询

## 代码编辑器与开发者工具

- IDE: VS Code、WebStorm
- Chrome DevTools: Sources(断点调试)、Console(REPL)、Network、Elements
- `console.log` / `debugger` 语句快速调试
