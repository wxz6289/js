# 2.1 Document

## 浏览器环境

```
window
├── DOM (document)
├── BOM (navigator, screen, location, frames, history)
└── JavaScript (Object, Array, Function...)
```

- `window` 是全局对象，也是浏览器窗口对象
- `document` 是 DOM 的入口点

## DOM 树

- HTML 被解析为 DOM 树（节点层次结构）
- 节点类型：元素节点(1)、文本节点(3)、注释节点(8)、文档节点(9)
- 所有节点继承自 `EventTarget` → `Node` → `Element` / `Text` / `Comment`

## 遍历 DOM

```js
// 顶层
document.documentElement  // <html>
document.body             // <body>
document.head             // <head>

// 导航
parentNode / parentElement
childNodes / children / firstChild / lastChild
nextSibling / previousSibling
nextElementSibling / previousElementSibling

// childNodes 包含文本和注释节点；children 仅元素节点
// 表格特殊属性：table.rows, table.tBodies, tr.cells, tr.sectionRowIndex
```

## 搜索元素

```js
document.getElementById('id')
elem.querySelectorAll('css')      // 静态 NodeList
elem.querySelector('css')          // 第一个匹配元素
elem.getElementsByClassName('cls') // 动态 HTMLCollection（实时更新）
elem.getElementsByTagName('div')   // 动态
elem.matches('css')                // 是否匹配选择器 boolean
elem.closest('css')                // 最近的祖先（含自身）
```

## 节点操作

```js
// 创建
document.createElement('div')
document.createTextNode('text')
elem.cloneNode(true)   // true=深克隆，false=浅克隆

// 插入/移除
parent.append(node, 'text', ...)       // 末尾
parent.prepend(node)                    // 开头
parent.before(node)
parent.after(node)
node.replaceWith(newNode)
node.remove()

// 旧方法（仍在使用）
parent.appendChild(node)
parent.insertBefore(node, ref)
parent.removeChild(node)
parent.replaceChild(newNode, oldNode)

// 移动节点 — 如果插入已存在的节点，会从旧位置移除（自动移动）
```

## innerHTML vs outerHTML

```js
elem.innerHTML = '<div>new</div>';    // 替换内容（解析HTML）
elem.innerHTML += '<div>more</div>';  // ⚠️ 完全重写内容！丢失事件和状态
elem.outerHTML;                       // 包含元素自身的 HTML
// 插入 outerHTML 会替换自身
```

## 属性 (Attributes) 与 DOM 属性 (Properties)

```js
// HTML 属性 → getAttribute/setAttribute
elem.getAttribute('id')
elem.setAttribute('class', 'active')
elem.hasAttribute('checked')
elem.removeAttribute('class')

// DOM 属性 → 直接访问
elem.id
elem.className         // class 属性映射为 className
elem.classList         // class 的 DOMTokenList（推荐）
//  ╰─ add/remove/toggle/contains/replace

// 非标准属性用 data-* (HTML5)
<div data-user-id="42">
elem.dataset.userId    // "42"（camelCase 访问）
```

## 样式操作

```js
// 行内样式
elem.style.color = 'red'
elem.style.cssText = 'color: red; font-size: 14px'

// 计算样式（只读，含所有CSS规则的最终值）
getComputedStyle(elem).color
getComputedStyle(elem, ':hover').color // 伪类样式

// 类操作（推荐 — 分离样式逻辑）
elem.classList.add('active')
elem.classList.toggle('dark')
```

## 几何信息 (Geometry)

```js
elem.offsetParent          // 最近的定位祖先
elem.offsetLeft / offsetTop // 相对 offsetParent 的偏移
elem.offsetWidth / offsetHeight // 含 border + padding
elem.clientLeft / clientTop  // border 宽度
elem.clientWidth / clientHeight // 含 padding，不含 border 和滚动条
elem.scrollWidth / scrollHeight // 内容总大小（含溢出部分）
elem.scrollLeft / scrollTop    // 滚动位置（可写）
```

## 窗口大小与滚动

```js
// 窗口可视区域
document.documentElement.clientWidth
document.documentElement.clientHeight
window.innerWidth / window.innerHeight  // 含滚动条

// 页面总大小
let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight
);

// 滚动
window.scrollBy(0, 100)       // 相对当前
window.scrollTo(0, 0)         // 绝对
elem.scrollIntoView(true)     // 对齐顶部
elem.scrollIntoView(false)    // 对齐底部
// 禁止页面滚动: document.body.style.overflow = 'hidden'
```

## 坐标 (Coordinates)

- **相对于窗口**：`elem.getBoundingClientRect()` — { top, left, right, bottom, width, height }
- **相对于文档**：rect + 当前滚动位置
- `document.elementFromPoint(x, y)` — 获取坐标处最顶层的元素
