# 2.4 表单，控件

## 表单属性与方法

```js
// 访问表单
document.forms.myForm           // 通过 name 属性
document.forms[0]               // 通过索引

// 访问表单元素
form.elements.login             // 通过 name
form.elements[0]                // 通过索引
form.elements.login.value       // 获取/设置值

// 单选按钮 (radio)
form.elements.gender            // RadioNodeList（同 name 的多个 radio）
form.elements.gender.value      // 当前选中的值

// 提交
form.submit()                   // 以代码提交（不触发 submit 事件）
form.reset()                    // 重置所有字段
```

## 表单事件

```js
form.onsubmit = function(e) {
  if (!validate()) e.preventDefault();  // 阻止提交
};

// input — 每次输入变化时触发
input.oninput = function() { console.log(this.value); };
// change — 值改变且失去焦点时触发（适合 select、checkbox）
// focus / blur — 聚焦/失焦
// copy / paste / cut — 剪贴板事件
```

## 表单控件

### input / textarea
```js
input.value         // 当前值（始终是字符串）
input.checked       // checkbox/radio
textarea.value      // 文本区域（不是 innerHTML）
```

### select / option
```js
select.options              // HTMLCollection
select.selectedIndex        // 选中选项的索引
select.value                // 选中选项的 value（或 text）
option.selected = true      // 程序化选择
new Option(text, value, defaultSelected, selected)  // 创建选项
```

## 表单验证

```js
// 内置约束验证 API
input.validity              // ValidityState 对象
// { valid, valueMissing, typeMismatch, patternMismatch, tooLong,
//   tooShort, rangeUnderflow, rangeOverflow, stepMismatch, badInput, customError }

input.checkValidity()       // 返回 boolean（触发事件）
input.reportValidity()      // 返回 boolean（+ 显示浏览器错误信息）
input.setCustomValidity('自定义错误信息'); // 设置自定义验证消息

// HTML 验证属性
<input required minlength="3" maxlength="20" pattern="[a-z]+">
<input type="email" type="url" type="number" min="0" max="100" step="1">

// 禁用验证
<form novalidate>
<button formnovalidate>
```

## 焦点管理

```js
elem.focus()              // 聚焦
elem.blur()               // 失焦
document.activeElement    // 当前聚焦元素

// tabindex
// 0  — 按 DOM 自然顺序（可编程聚焦）
// -1 — 仅可通过 elem.focus() 聚焦
// >0 — 自定义 tab 顺序（不推荐）

// focus/blur 不冒泡
// 事件委托用 focusin / focusout
```

## 文件上传

```html
<input type="file" multiple accept="image/*">
```

```js
input.files;  // FileList（类数组）
let file = input.files[0];
file.name       // 文件名
file.size       // 字节数
file.type       // MIME 类型
file.lastModified

// 读取文件
let reader = new FileReader();
reader.onload = e => console.log(e.target.result);
reader.readAsDataURL(file);  // base64 data URL
reader.readAsText(file);     // 文本内容
reader.readAsArrayBuffer(file); // 二进制

// 或者使用 URL.createObjectURL
let url = URL.createObjectURL(file);  // 临时 URL
URL.revokeObjectURL(url);             // 清理内存
```

## 提交 (Submit) 的细节

```js
// Enter 键提交规则：
// 1. 表单有 <input type="submit"> 或 <button> 时，Enter 在任何字段中都会提交
// 2. 单字段表单，Enter 直接提交
// 3. form.submit() 不触发 onsubmit

// 提交前确认
window.onbeforeunload = () => 'You have unsaved changes!';
```
