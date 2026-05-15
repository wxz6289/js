# 第16章 Node.js 中的 JavaScript

## Node.js 运行时

- 基于 V8 引擎的服务器端 JavaScript 运行时
- 事件驱动、非阻塞 I/O 模型
- CommonJS 模块系统（默认）

## 模块系统

```js
// CommonJS
const fs = require('fs');
module.exports = { fn };

// ES Modules（.mjs 或 package.json 中 "type": "module"）
import fs from 'fs';
export default fn;
```

## 核心模块

| 模块 | 用途 |
|------|------|
| `fs` | 文件系统操作 |
| `path` | 路径处理 |
| `http`/`https` | HTTP 服务器/客户端 |
| `stream` | 流式数据处理 |
| `buffer` | 二进制数据 |
| `crypto` | 加密 |
| `events` | 事件发射器 |
| `process` | 进程信息与控制 |
| `child_process` | 子进程 |
| `os` | 操作系统信息 |
| `url` | URL 解析 |
| `querystring` | 查询字符串解析 |

## 全局对象

```js
global          // Node 全局对象（浏览器中是 window）
globalThis      // 统一的全局对象 (ES2020)
process         // 进程对象
Buffer          // 二进制数据缓冲区
__dirname       // 当前模块目录（仅 CommonJS）
__filename      // 当前模块文件路径（仅 CommonJS）
```

## npm (Node Package Manager)

- `package.json`：项目依赖和元数据
- `node_modules/`：依赖安装目录
- `npm install` / `npm ci`：安装依赖
- `npx`：执行 npm 包命令

## 事件发射器

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('event', (data) => {});
emitter.emit('event', data);
```

## 容易弄错的点

1. **`__dirname` 和 `__filename` 在 ES 模块中不可用**：需用 `import.meta.url` 替代
   ```js
   // CommonJS
   __dirname;
   // ES Module
   import { fileURLToPath } from 'url';
   import { dirname } from 'path';
   const __dirname = dirname(fileURLToPath(import.meta.url));
   ```

2. **同步 I/O 方法会阻塞事件循环**：`fs.readFileSync()` 在服务器代码中使整个进程等待。默认使用异步版本

3. **`process.env` 的值始终是字符串**：`process.env.PORT` 是 `"3000"` 而非 `3000`

4. **模块缓存**：`require` 的模块被缓存。如果模块导出的是对象字面量，所有引用方共享同一个对象

5. **`process.exit()` 立即终止进程**：不等待异步操作完成、不触发 `finally`、不清理资源。优先用优雅关闭

6. **错误优先回调 (error-first callback)**：Node.js 的传统模式——回调的第一个参数是 error 对象（或 null），不是 Promise 的 resolved/rejected

7. **`setTimeout` 和 `setInterval` 在 Node 中的延迟下限与浏览器不同**：Node 中 1ms 的 setTimeout 实际可能更长（受事件循环阶段影响）
