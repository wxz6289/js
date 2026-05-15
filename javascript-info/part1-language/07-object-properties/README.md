# 1.7 对象属性配置

## 属性标志 (Property Flags)

每个属性除 `value` 外还有三个标志：

| 标志 | 默认值 | 含义 |
|------|--------|------|
| `writable` | true | 可修改值 |
| `enumerable` | true | 可在 for/in 和 Object.keys 中看到 |
| `configurable` | true | 可删除、可修改标志（一旦设为 false 不可逆） |

```js
let desc = Object.getOwnPropertyDescriptor(obj, 'prop');
Object.defineProperty(obj, 'prop', {
  value: 42,
  writable: false,      // 只读
  enumerable: false,    // 不可枚举
  configurable: false   // 不可配置
});
Object.defineProperties(obj, { /* 多个 */ });
```

## 访问器属性 (Getter/Setter)

```js
let user = {
  firstName: "John",
  lastName: "Smith",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
};
user.fullName = "Alice Cooper";  // 触发 setter
console.log(user.fullName);       // 触发 getter

// 用 defineProperty 创建
Object.defineProperty(user, 'fullName', {
  get() { return `${this.firstName} ${this.lastName}`; },
  set(value) { [this.firstName, this.lastName] = value.split(' '); },
  enumerable: true
});
```
- 访问器属性没有 `value` 和 `writable`，用 `get` 和 `set` 替代
- getter/setter 和同名数据属性不能共存

## 对象的不可变性

```js
// 1. 禁止添加属性
Object.preventExtensions(obj);

// 2. 禁止添加/删除属性（configurable: false）
Object.seal(obj);

// 3. 禁止添加/删除/修改（configurable: false, writable: false）
Object.freeze(obj);

// 检查状态
Object.isExtensible(obj);
Object.isSealed(obj);
Object.isFrozen(obj);
```
- 均为**浅操作**，嵌套对象不受影响
- 被冻结对象的修改在严格模式下抛 TypeError，非严格静默失败

## 获取所有属性

```js
Object.keys(obj)                    // 自身可枚举（不含 Symbol）
Object.getOwnPropertyNames(obj)     // 自身所有（不含 Symbol）
Object.getOwnPropertySymbols(obj)   // 自身 Symbol
Reflect.ownKeys(obj)                // 自身所有（含 Symbol）

for (let key in obj)                // 自身+继承的可枚举（不含 Symbol）
```

## 包装对象再探

```js
let str = "Hello";
str.test = 5;  // 非严格模式静默失败，严格模式 TypeError
// 原因：包装对象创建后立即销毁，赋值无目标
```
