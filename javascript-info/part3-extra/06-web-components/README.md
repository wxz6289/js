# 3.6 Web Components

## Custom Elements

### 自主定制元素 (Autonomous)
```js
class MyElement extends HTMLElement {
  constructor() { super(); /* 初始化 */ }
  connectedCallback() { /* 添加到 DOM */ }
  disconnectedCallback() { /* 从 DOM 移除 */ }
  adoptedCallback() { /* 移动到新文档 */ }
  static get observedAttributes() { return ['attr-name']; }
  attributeChangedCallback(name, oldVal, newVal) { /* 属性变化 */ }
}
customElements.define('my-element', MyElement);
```

```html
<my-element attr-name="value"></my-element>
```

### 定制内置元素 (Customized Built-in)
```js
class WordCount extends HTMLParagraphElement {
  constructor() { super(); }
}
customElements.define('word-count', WordCount, { extends: 'p' });

// HTML: <p is="word-count"></p>
// JS: document.createElement('p', { is: 'word-count' })
```

## Shadow DOM

```js
let shadow = elem.attachShadow({ mode: 'open' }); // open: 外部可访问
// let shadow = elem.attachShadow({ mode: 'closed' }); // 不可访问

// Shadow DOM 内部完全隔离
shadow.innerHTML = `
  <style>
    /* 这里的样式不会影响外部 DOM */
    button { color: red; }
  </style>
  <button><slot></slot></button>
`;
```

- Shadow DOM 内的样式和 JS 与外部隔离
- `<slot>` 将 Light DOM 的内容投射到 Shadow DOM

## 插槽 (Slots)

```html
<!-- 组件模板 -->
<template id="user-card">
  <style>...</style>
  <div class="card">
    <h2><slot name="title">默认标题</slot></h2>
    <div><slot>默认内容</slot></div>
  </div>
</template>

<!-- 使用 -->
<user-card>
  <span slot="title">自定义标题</span>
  <p>自定义内容</p>
</user-card>
```

```js
class UserCard extends HTMLElement {
  constructor() {
    super();
    let template = document.getElementById('user-card');
    this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true));
  }
}
```

## Template 元素

```html
<template id="tmpl">
  <style>...</style>
  <div class="item">内容</div>
</template>
```
- `<template>` 的内容不会被渲染，不执行脚本
- 通过 `template.content.cloneNode(true)` 克隆使用

## CSS 自定义属性穿透 Shadow DOM

```css
/* 外部定义 */
user-card {
  --card-bg: #f0f0f0;
}
/* Shadow DOM 内部使用 */
.card {
  background: var(--card-bg, white);
}
```

## 组件通信

- **属性 (Attributes)**：字符串数据，通过 `observedAttributes` 监听
- **属性 (Properties)**：复杂数据，通过 getter/setter
- **事件**：`this.dispatchEvent(new CustomEvent(name, { detail, bubbles, composed }))`
  - `composed: true` 允许事件穿透 Shadow DOM 边界
- **Slot**：传递 DOM 内容
- **CSS 自定义属性**：传递样式变量

## 实际组件示例

```js
class ToggleButton extends HTMLElement {
  static get observedAttributes() { return ['pressed']; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; }
        button { padding: 8px 16px; }
        :host([pressed]) button { background: #4CAF50; color: white; }
      </style>
      <button><slot></slot></button>
    `;
    this.button = this.shadowRoot.querySelector('button');
    this.button.addEventListener('click', () => this.toggle());
  }

  get pressed() { return this.hasAttribute('pressed'); }
  set pressed(val) { val ? this.setAttribute('pressed', '') : this.removeAttribute('pressed'); }

  toggle() {
    this.pressed = !this.pressed;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { pressed: this.pressed },
      bubbles: true, composed: true
    }));
  }
}
customElements.define('toggle-button', ToggleButton);
```
