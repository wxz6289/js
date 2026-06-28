# 1.13 模块

## 为什么需要模块

- 代码组织和复用
- 隔离作用域，避免全局命名冲突
- 管理依赖关系

## 历史模块系统

```js
// AMD (RequireJS) — 浏览器异步加载
define(['dep1', 'dep2'], function(dep1, dep2) { return {}; });

// CommonJS — Node.js 默认
const dep = require('./dep');
module.exports = { fn };

// UMD — 通用模块定义（兼容 AMD + CommonJS + 全局变量）
```

## ES Module (ESM)

```html
<script type="module" src="app.js"></script>
```

### 导出
```js
// 命名导出
export const PI = 3.14;
export function sum(a, b) { return a + b; }
export { user, data };
export { user as currentUser };

// 默认导出
export default class User {};
export { fn as default };

// 重导出
export { default as User } from './user.js';
export * from './utils.js';     // 不包含 default
export * as utils from './utils.js'; // ES2020
```

### 导入
```js
// 命名导入
import { PI, sum } from './math.js';
import { PI as pie } from './math.js';

// 默认导入
import User from './user.js';

// 命名空间导入
import * as math from './math.js';

// 混合
import User, { helper } from './user.js';

// 仅副作用
import './init.js';
```

### 动态导入
```js
// 条件加载
if (condition) {
  const module = await import('./module.js');
}

// 代码拆分
button.onclick = async () => {
  const { default: Modal } = await import('./modal.js');
  new Modal().show();
};
```

## ESM 特性

| 特性 | 说明 |
|------|------|
| 严格模式 | 自动应用 |
| 顶级this | `undefined` |
| 作用域 | 每个模块独立 |
| 加载方式 | 默认 defer |
| 只执行一次 | 多次 import 同一模块只执行一次 |
| Live bindings | 导入的是实时绑定，不是快照 |

## Node.js 中的 ESM

```json
// package.json
{ "type": "module" }

// 或使用 .mjs 扩展名
```

```js
// CommonJS 不能 require() ESM 模块
// ESM 可以 import CJS 模块（default import）
import cjsModule from './legacy.cjs';

// __dirname 替代方案
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
```

## import.meta

```js
console.log(import.meta.url);   // 当前模块 URL
console.log(import.meta.resolve); // 模块解析
```
