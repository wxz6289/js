# 2.6 杂项

## MutationObserver

监控 DOM 变化：

```js
let observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    // mutation.type: "childList" | "attributes" | "characterData"
    if (mutation.type === 'childList') {
      console.log('子节点增删:', mutation.addedNodes, mutation.removedNodes);
    }
  }
});

observer.observe(elem, {
  childList: true,         // 监控子节点增删
  attributes: true,        // 监控属性变化
  characterData: true,     // 监控文本变化
  subtree: true,           // 监控所有后代
  attributeOldValue: true, // 记录旧属性值
  characterDataOldValue: true,
  attributeFilter: ['class', 'style']  // 仅监控指定属性
});

observer.disconnect();     // 停止监控
observer.takeRecords();    // 获取尚未处理的变更记录
```

## Selection 和 Range

```js
// 获取用户选中的文本
let selection = document.getSelection();
selection.toString();
selection.anchorNode / anchorOffset;  // 选区起点
selection.focusNode / focusOffset;    // 选区终点
selection.isCollapsed;                // 是否为空选区
selection.removeAllRanges();

// Range — 更精细的选区控制
let range = new Range();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
selection.addRange(range);
range.deleteContents();
range.extractContents();   // 删除并返回 DocumentFragment
range.cloneContents();     // 复制内容
range.insertNode(node);
range.surroundContents(node);
```

## 事件循环 (Event Loop) — 浏览器视角

```js
// 宏任务: script, setTimeout, setInterval, I/O, UI rendering
// 微任务: Promise.then/catch/finally, queueMicrotask, MutationObserver

// 每轮事件循环:
// 1. 从宏任务队列取一个任务执行
// 2. 清空所有微任务
// 3. 如果时间允许，渲染 UI

console.log(1);
setTimeout(() => console.log(2), 0);           // 宏任务
Promise.resolve().then(() => console.log(3));   // 微任务
console.log(4);
// 输出: 1 4 3 2
```

## window.requestAnimationFrame

```js
// 在浏览器下一次重绘前执行（~16ms/帧）
function animate() {
  element.style.transform = `translateX(${x}px)`;
  x += 1;
  if (x < 200) requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
// 优于 setInterval: 与屏幕刷新率同步，标签页隐藏时自动暂停
```

## window.requestIdleCallback

```js
// 浏览器空闲时执行非关键任务
requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0 && tasks.length) {
    processTask(tasks.pop());
  }
}, { timeout: 1000 });  // 最多等 1 秒
```
