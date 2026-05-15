# 1.3 代码质量

## 调试 (Chrome DevTools)

- **断点 (Breakpoint)**：在 Sources 面板点击行号，代码在此暂停
- **条件断点**：右键行号 → 添加条件
- **debugger 语句**：代码中写 `debugger;`，自动在此暂停
- **Watch**：实时监控表达式值
- **Call Stack**：查看函数调用链
- **Scope**：查看当前作用域变量
- **Step Over (F10)**：执行下一行但不进入函数
- **Step Into (F11)**：进入函数内部
- **Step Out (Shift+F11)**：执行到当前函数结束
- **Resume (F8)**：继续执行到下一个断点

## 代码风格

- 缩进：2空格或4空格（保持团队一致）
- 分号：行尾加分号（不依赖ASI）
- 空格：运算符两侧、参数间、嵌套调用间加空格
- 花括号：Egyptian style（左括号在同一行）
- 行长：建议不超过80-120字符
- 空行：逻辑块间加空行分隔

## 注释

- 解释"为什么"而不是"是什么"（代码本身说明"是什么"）
- 函数前用 JSDoc 格式：`/** @param {number} x @returns {number} */`
- 保持注释与代码同步更新

## 自动化工具

```json
// ESLint — 代码静态检查
{ "extends": "eslint:recommended" }

// Prettier — 代码格式化
{ "semi": true, "singleQuote": true, "tabWidth": 2 }
```

## Polyfill 和 Transpiler

- **Transpiler（转译器）**：将新语法转为旧语法（Babel）
- **Polyfill**：补充缺失的新 API（core-js）
- Babel 配合 `@babel/preset-env` 按目标环境(min)转译

```js
// 新语法 → Babel 转译
class User {} → function User() {}

// 新 API → polyfill
if (!Array.prototype.includes) {
  Array.prototype.includes = function() { /* ... */ };
}
```
