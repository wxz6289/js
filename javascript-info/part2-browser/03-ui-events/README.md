# 2.3 UI 事件

## 鼠标事件

```js
// 鼠标按钮
event.button  // 0=左键 1=中键 2=右键

// 修饰键
event.ctrlKey / altKey / shiftKey / metaKey(Cmd)

// 坐标
event.clientX / clientY   // 相对窗口
event.pageX / pageY       // 相对文档
event.screenX / screenY   // 相对屏幕

// 相关元素
event.relatedTarget       // mouseover/mouseout 的源/目标元素

// mouseenter/mouseleave vs mouseover/mouseout
// mouseenter: 不冒泡，进入元素触发（忽略后代间移动）
// mouseover: 冒泡，每次进入元素或其后代触发
```

## 鼠标拖拽 (Drag & Drop)

```js
ball.onmousedown = function(event) {
  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
  };
};
// ⚠️ 在 document 上监听 mousemove 和 mouseup（防止鼠标移出元素）
```

## 键盘事件

```js
// keydown — 按下时触发（重复触发）
// keyup — 释放时触发

event.key         // 字符值: "a", "Enter", "ArrowLeft"
event.code        // 物理键位: "KeyA", "ArrowLeft", "Digit1"（不随布局变化）

// 修饰键
event.ctrlKey / altKey / shiftKey / metaKey
// Ctrl+Z: event.ctrlKey && event.key === 'z'

// 默认行为
event.preventDefault(); // 阻止输入字符（用于自定义输入控件）
```

## 滚动事件

```js
window.addEventListener('scroll', handler);
// ⚠️ scroll 事件高频触发，做好节流
// ⚠️ scroll 不冒泡

// 使用 passive 提升性能
window.addEventListener('scroll', handler, { passive: true });

// 检测滚动到底部
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 无限滚动
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
      document.documentElement.clientHeight + 100) {
    loadMore();
  }
});
```

## 指针事件 (Pointer Events)

```js
// 统一鼠标、触摸、笔的交互模型
elem.addEventListener('pointerdown', handler);
elem.addEventListener('pointermove', handler);
elem.addEventListener('pointerup', handler);

// 属性
event.pointerType   // "mouse" | "touch" | "pen"
event.pointerId     // 区分多点触摸
event.pressure      // 笔压力值 [0, 1]

// 触摸动作
elem.style.touchAction = 'none';  // 禁用浏览器默认手势（如缩放）
```

## 表单焦点事件

```js
// focus / blur — 不冒泡
// focusin / focusout — 冒泡（适合事件委托）

// tabindex 使任意元素可聚焦
<div tabindex="0">可聚焦</div>        // 按DOM顺序
<div tabindex="-1">仅编程方式聚焦</div> // elem.focus()
```
