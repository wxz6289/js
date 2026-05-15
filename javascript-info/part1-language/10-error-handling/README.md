# 1.10 错误处理

## try...catch

```js
try {
  // 执行代码
  riskyOperation();
} catch (err) {
  // 错误处理
  console.log(err.name);     // 错误类型名
  console.log(err.message);  // 错误描述
  console.log(err.stack);    // 调用栈（非标准但广泛支持）
} finally {
  // 始终执行（即使有 return 或 throw）
}
```

## 内置错误类型

```js
Error           // 通用错误
TypeError       // 类型错误
ReferenceError  // 引用错误（变量不存在）
SyntaxError     // 语法错误
RangeError      // 范围错误
URIError        // URI 错误
EvalError       // eval 错误（已废弃）
AggregateError  // 多个错误的集合 (ES2021)
```

## 抛出自定义错误

```js
throw new Error("Something went wrong");

// 自定义错误类
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
  // 确保 instanceof 在继承链中正确工作
}
throw new ValidationError("Invalid input");

// 重新抛出
try {
  readData();
} catch (err) {
  if (err instanceof ValidationError) {
    handleValidationError(err);
  } else {
    throw err; // 重新抛出未知错误
  }
}
```

## 全局 catch

```js
// 浏览器
window.onerror = function(message, url, line, col, error) { };

// Node.js
process.on('uncaughtException', (err) => { });
process.on('unhandledRejection', (reason, promise) => { });
```

## 可选 catch 绑定 (ES2019)

```js
try { /* ... */ }
catch { /* 不需要 error 对象 */ }
```
