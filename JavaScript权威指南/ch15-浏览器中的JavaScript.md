# 第15章 浏览器中的JavaScript

## 文档对象模型 (DOM)

```js
// 选择元素
document.querySelector('css')
document.querySelectorAll('css')

// 创建/修改
let el = document.createElement('div')
el.innerHTML = '<span>text</span>'
el.textContent = 'text'
el.setAttribute('id', 'main')
el.classList.add('active')

// 插入
parent.appendChild(el)
parent.insertBefore(el, ref)
parent.removeChild(el)
el.remove()              // 现代方法
```

## 事件处理

```js
el.addEventListener('click', handler);           // 推荐
el.removeEventListener('click', handler);
el.dispatchEvent(new Event('custom'));

// 事件传播：捕获 → 目标 → 冒泡
el.addEventListener('click', fn, { capture: true, once: true });
e.stopPropagation();   // 阻止传播
e.preventDefault();    // 阻止默认行为
```

## 脚本加载

```html
<script src="file.js"></script>           <!-- 阻塞解析 -->
<script src="file.js" defer></script>     <!-- 异步下载，解析后执行 -->
<script src="file.js" async></script>     <!-- 异步下载，下载完立即执行 -->
<script type="module"></script>           <!-- ES模块，默认 defer -->
```

## 定时器

```js
setTimeout(fn, delay)         // 延迟执行一次
setInterval(fn, interval)     // 周期执行
requestAnimationFrame(fn)     // 下一帧执行（60fps 动画）
requestIdleCallback(fn)       // 浏览器空闲时执行
```

## 网络请求

```js
// Fetch API
fetch(url, { method, headers, body })
  .then(res => res.json())
  .catch(err => console.error(err))

// CORS 与跨域：服务端设置 Access-Control-Allow-Origin
```

## 客户端存储

| API | 容量 | 作用域 | 持久性 |
|-----|------|--------|--------|
| Cookie | ~4KB | 同源+path | 可设过期 |
| localStorage | ~5MB | 同源 | 永久 |
| sessionStorage | ~5MB | 同源+标签页 | 标签页关闭 |
| IndexedDB | 大容量 | 同源 | 永久（异步） |

## Web Workers

```js
const worker = new Worker('worker.js');
worker.postMessage(data);
worker.onmessage = (e) => console.log(e.data);
```
- 独立线程，不能访问 DOM
- 通过 postMessage 通信（结构化克隆）
- SharedWorker：多标签页共享
- Service Worker：离线缓存、推送通知

## 浏览器渲染流程

解析HTML → DOM树 → 解析CSS → CSSOM → 合成渲染树 → 布局(Layout) → 绘制(Paint) → 合成(Composite)

## 容易弄错的点

1. **`innerHTML` 有 XSS 风险**：插入含用户内容的 HTML 会执行恶意脚本。用 `textContent` 替代显示用户文本，或用 `createElement` 构建

2. **频繁触发 reflow 严重影响性能**：读取 `offsetWidth`/`scrollTop` 等属性会强制浏览器同步计算布局。最佳实践：批量读，批量写，或使用 `requestAnimationFrame`

3. **`removeEventListener` 需要传入与 `addEventListener` 完全相同的函数引用**：匿名函数和箭头函数每次都是新引用，无法移除
   ```js
   el.addEventListener('click', () => {}); // 这个监听器永远无法被移除
   ```

4. **事件委托依赖冒泡**：`focus`、`blur`、`scroll` 事件不冒泡（需用 `focusin`/`focusout` 或 `capture: true`）

5. **`e.stopPropagation()` 阻止冒泡但不阻止同元素上的其他处理器**：用 `e.stopImmediatePropagation()` 阻止同元素上后续监听器

6. **Cookie 每次 HTTP 请求都会发送**：不要在 Cookie 中存大量数据（限制 ~4KB），影响性能。非身份验证数据用 localStorage

7. **Worker 中不能访问 DOM、`window`、`document`**：这些对象不存在于 Worker 上下文。可通过 `postMessage` 通信，数据通过结构化克隆传递（不能传递函数和 DOM 节点）

8. **事件委托的核心优势**：子元素动态增删时无需重复绑定。但务必在事件处理中检查 `e.target` 是否是预期的子元素（可能需要 `closest()` 遍历查找真正的委托目标）
