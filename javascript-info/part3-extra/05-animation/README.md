# 3.5 动画

## CSS 动画 vs JavaScript 动画

- **CSS 动画**：简单过渡、关键帧动画。GPU 加速，性能好
- **JS 动画**：复杂逻辑（物理模拟、粒子系统）、交互式动画

## requestAnimationFrame

```js
function animate(timestamp) {
  // timestamp: 回调被触发的时间（高精度，毫秒）
  draw(timestamp);
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```
- 浏览器优化：与屏幕刷新率同步（60fps）
- 标签页隐藏时自动暂停
- 多个 rAF 回调合并到同一帧

```js
// 控制帧率
let lastTime = 0;
const fps = 30;
const interval = 1000 / fps;

function animate(timestamp) {
  if (timestamp - lastTime >= interval) {
    lastTime = timestamp;
    draw();
  }
  requestAnimationFrame(animate);
}
```

## JS 动画性能要点

- 优先使用 `transform` 和 `opacity`（只触发 Composite，不触发布局和绘制）
- 避免在每帧中读取布局属性（`offsetTop`、`getBoundingClientRect`）后立即修改样式 — 会触发强制同步布局(Forced Reflow)
- 使用 `will-change` CSS 属性提示浏览器优化

```css
.animating {
  will-change: transform;
}
```

## 使用 requestAnimationFrame 的动画示例

```js
function animateMove(elem, targetX, duration = 1000) {
  let startX = elem.getBoundingClientRect().left;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);

    // 缓动函数（ease-in-out）
    let eased = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    elem.style.transform = `translateX(${startX + (targetX - startX) * eased}px)`;

    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
```

## Web Animations API

```js
// 声明式动画 API
let animation = elem.animate([
  { transform: 'translateX(0px)' },
  { transform: 'translateX(300px)' }
], {
  duration: 1000,
  iterations: 2,
  direction: 'alternate',
  easing: 'ease-in-out',
  fill: 'forwards'
});

animation.pause();
animation.play();
animation.reverse();
animation.finish();
animation.cancel();

animation.onfinish = () => console.log('done');
```
