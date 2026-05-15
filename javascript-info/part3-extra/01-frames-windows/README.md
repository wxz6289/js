# 3.1 Frame 和 Window

## 弹窗 (Popup)

```js
let popup = window.open(
  url, name, 
  'width=600,height=400,left=100,top=100,menubar=no,toolbar=no'
);
popup.close();           // 关闭弹窗
popup.closed;            // 是否已关闭
popup.focus();           // 聚焦
popup.location.href;     // 访问弹窗的 URL（同源才能访问）
```

```js
// 弹窗阻止：浏览器的弹窗阻止器只在用户操作触发的同步代码中允许 open
button.onclick = () => window.open('/');     // OK — 同步
button.onclick = () => {
  setTimeout(() => window.open('/'), 1000);  // 被阻止！异步
};
```

## 跨窗口通信

### 同源窗口
```js
// 父窗口访问 iframe
iframe.contentWindow.document
iframe.contentDocument

// iframe 访问父窗口
window.parent
window.top  // 最顶层窗口
```

### 跨源窗口通信 — postMessage
```js
// 发送方
targetWindow.postMessage(data, 'https://target.com');

// 接收方
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://expected.com') return;  // 安全校验！
  console.log(event.data);
  event.source.postMessage('ACK', event.origin); // 回复
});
```

## iframe

```html
<iframe src="page.html" name="myFrame" sandbox="allow-scripts allow-same-origin">
```
- `sandbox` 属性施加严格限制（默认禁止脚本、表单、弹窗等）
- `allow-scripts` 允许脚本，`allow-same-origin` 允许同源访问

## 跨域策略

- **同源** = 协议 + 域名 + 端口相同
- 子域可通过设置 `document.domain` 相互通信（已废弃，用 postMessage）
- CORS（跨源资源共享）通过 HTTP 头部实现跨源请求

```js
// 检查跨源访问是否可用
try { iframe.contentWindow.document; }  // 跨源时抛出异常
catch(e) { /* 跨源，无法访问 */ }
```
