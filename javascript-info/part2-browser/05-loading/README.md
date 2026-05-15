# 2.5 加载文档和资源

## 页面生命周期

```
DOMContentLoaded  →  DOM 构建完成，外部资源（图片/样式）可能还在加载
load              →  所有资源加载完成
beforeunload      →  用户即将离开（可显示确认对话框）
unload            →  用户已离开（几乎无法做任何事）
```

```js
// DOMContentLoaded — DOM 准备好
document.addEventListener('DOMContentLoaded', () => {
  // 可以操作 DOM，但图片可能还未加载
});

// 如果脚本在 DOM 之后执行（defer 或 body 底部），DOMContentLoaded 可能已触发
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', handler);
} else {
  handler(); // 已经加载完成
}

// load — 全部资源就绪
window.onload = () => { /* 图片也加载完了 */ };
```

## 文档状态 readyState

```js
// document.readyState 三状态：
// 'loading'  — 文档还在加载
// 'interactive' — DOM 已解析（≈DOMContentLoaded）
// 'complete'  — 文档和所有子资源已加载（≈load）

if (document.readyState === 'complete') {
  initApp();
} else {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') initApp();
  });
}
```

## 脚本加载策略

```html
<!-- 阻塞解析，立即执行 -->
<script src="1.js"></script>

<!-- 异步下载，解析完执行（保持顺序） -->
<script src="1.js" defer></script>
<script src="2.js" defer></script>

<!-- 异步下载，下载完立即执行（不保证顺序） -->
<script src="1.js" async></script>

<!-- ES Modules — 默认 defer -->
<script type="module" src="app.js"></script>
```

```js
// 动态脚本加载
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}
```

## 资源加载：onload 和 onerror

```js
let img = document.createElement('img');
img.onload = () => console.log('loaded');
img.onerror = () => console.log('failed');
img.src = 'image.png';

// 同样适用于 link、style、iframe 等
// 跨域图片会限制 canvas 操作，除非设置 crossorigin="anonymous"
```

## beforeunload / unload

```js
// 提示用户保存未保存的更改
window.onbeforeunload = () => 'You have unsaved changes!';
// 现代浏览器不显示自定义消息，只显示默认对话框

// unload — 不推荐使用（会阻碍页面导航缓存 bfcache）
// 替代：使用 pagehide 事件
window.addEventListener('pagehide', () => {
  // 保存状态到 sessionStorage
});
```
