# 2.2 事件简介

## 事件处理器

```js
// 1. HTML 属性（不推荐）
<button onclick="alert('click')">

// 2. DOM 属性（单个处理器）
elem.onclick = function() { alert('click!'); };
elem.onclick = null;  // 移除

// 3. addEventListener（推荐 — 多个处理器）
elem.addEventListener('click', handler);
elem.removeEventListener('click', handler); // 必须是同一函数引用
elem.addEventListener('click', handler, { once: true }); // 只执行一次
```

## 事件对象

```js
elem.addEventListener('click', function(event) {
  event.type       // "click"
  event.target     // 触发事件的元素（最深层）
  event.currentTarget // 当前处理器的元素（this 的值）
  event.clientX / clientY  // 鼠标坐标（相对窗口）
  event.pageX / pageY      // 鼠标坐标（相对文档）
});
```

## 事件冒泡 (Bubbling)

事件从目标元素向上传播：`target → parent → ... → document → window`

```js
// 停止冒泡
event.stopPropagation();         // 阻止向上传播
event.stopImmediatePropagation(); // 阻止向上 + 阻止同元素其他处理器
// ⚠️ 非必要不要停止冒泡！会破坏事件委托和全局分析
```

## 事件捕获 (Capturing)

完整的事件传播三阶段：**Capture → Target → Bubble**

```js
// 捕获阶段处理
elem.addEventListener('click', handler, true);
elem.addEventListener('click', handler, { capture: true });
```

## 事件委托 (Event Delegation)

利用冒泡，在公共祖先上处理多个子元素的事件：

```js
menu.addEventListener('click', function(event) {
  let target = event.target.closest('button');  // 找到最近的目标按钮
  if (!target || !menu.contains(target)) return;

  let action = target.dataset.action;  // 从 data-action 获取行为
  handleAction(action);
});
```
- 优点：减少监听器数量，动态元素自动生效
- 陷阱：某些事件不冒泡（focus、blur、scroll）
- `event.target` 可能不是你想要的元素（可能是深层子元素）

## 浏览器默认行为

```js
event.preventDefault();  // 阻止默认行为
// 示例：防止链接跳转、表单提交、右键菜单

// 检查是否被阻止
event.defaultPrevented;  // true 表示 preventDefault 被调用
```

## 自定义事件

```js
// 创建和派发
let event = new Event('build');
elem.dispatchEvent(event);

// 带数据的自定义事件
let event = new CustomEvent('userAction', {
  detail: { userId: 42, action: 'click' },
  bubbles: true,
  cancelable: true
});
elem.addEventListener('userAction', e => console.log(e.detail));

// 内置事件类：MouseEvent, KeyboardEvent, FocusEvent 等
let click = new MouseEvent('click', {
  bubbles: true,
  clientX: 100, clientY: 200
});
```

## 事件处理选项

```js
elem.addEventListener('click', handler, {
  once: true,       // 执行一次后自动移除
  capture: false,   // 冒泡阶段处理
  passive: true,    // 不会调用 preventDefault（提升滚动性能）
  signal: controller.signal  // 通过 AbortController 移除
});
```

## 常见事件类型

| 类别 | 事件 |
|------|------|
| 鼠标 | click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave, mouseover, mouseout, contextmenu |
| 键盘 | keydown, keyup, keypress(废弃) |
| 表单 | submit, focus, blur, change, input |
| 文档/窗口 | DOMContentLoaded, load, beforeunload, unload |
| 触摸 | touchstart, touchmove, touchend, touchcancel |
| 指针 | pointerdown, pointermove, pointerup |
| 滚动 | scroll, wheel |
