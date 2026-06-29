# ES6 Class

类是创建对象的模板，本质是特殊的函数。

## 基本特性

| 特性 | 说明 |
|------|------|
| 调用方式 | 必须用 `new` |
| 严格模式 | 类体默认 `use strict` |
| 可枚举性 | 类方法不可枚举 |
| 构造器标记 | `[[IsClassConstructor]]: true`，`toString` 以 `class` 开头 |

```js
typeof MyClass === 'function'
MyClass === MyClass.prototype.constructor
```

## 类体成员

- **方法** — 写入 `Class.prototype`
- **访问器** — `get` / `set`
- **计算属性** — `[expr]()`
- **类字段** — 存在于实例上，每个对象独立一份（不在 `prototype` 上）
- **静态方法与静态属性** — 挂在类本身，可继承（`SubClass.__proto__ === BaseClass`）

### 类字段初始化顺序

- **基类**：在构造函数执行前初始化
- **派生类**：在 `super()` 调用之后立即初始化

### 类字段绑定方法

用箭头函数字段固定 `this`，避免 `setInterval(fn)` 等方法调用时丢失上下文：

```js
class Clock {
  render = () => { /* this 始终指向实例 */ };
}
```

## 继承

```js
class Child extends Parent { }
```

- `Child.prototype.__proto__` → `Parent.prototype`（方法继承）
- `extends` 后可以是任意表达式
- 派生类构造器必须先调用 `super()` 才能使用 `this`
- 未写构造器时，引擎生成默认构造器并调用 `super(...args)`
- 重写方法可用 `super.method()` 调用父类实现

### 派生构造器内部

派生类带有 `[[ConstructorKind]]: "derived"`。`new` 时不会自动创建 `this`，需由父类构造器完成；因此必须先 `super()`。

### super 与 [[HomeObject]]

方法（`method()` 语法）会记录 `[[HomeObject]]`，`super` 据此查找父类原型。

- 箭头函数没有自己的 `this` 和 `super`
- **复制带 `super` 的方法到其他对象是危险的** — HomeObject 不变
- 对象字面量中 `"eat": function(){}` 写法**没有** HomeObject，`super` 不可用

## 静态成员

静态方法用于类级别功能，不依赖实例。静态属性存储类级别数据。

```js
class Article {
  static publisher = '...';
  static createTodays() { return new this(...); }
}
```

## 私有字段

`#field` 仅在声明它的类内部可访问，子类不能直接读取父类私有字段。

## instanceof

`obj instanceof Class` 检测流程：

1. 若 `Class[Symbol.hasInstance]` 存在，则调用它
2. 否则检查 `Class.prototype` 是否在 `obj` 的原型链上

```js
Class.prototype.isPrototypeOf(obj) // 等价视角
```

决定类型的是 **prototype**，不是构造函数引用。

## 类型检测

| 方式 | 适用 |
|------|------|
| `typeof` | 基本类型 |
| `Object.prototype.toString` / `getType` | 内置对象、带 `Symbol.toStringTag` 的对象 |
| `instanceof` | 任意对象（原型链） |

对象可用 `Symbol.toStringTag` 自定义 `toString` 输出。

## 扩展内建类

- 实例方法可正常继承
- **内建类的静态方法不相互继承**（如 `Object.keys` 不会出现在 `class Cat extends Object` 上）
- 可用 `static get [Symbol.species]()` 改变部分内建方法返回实例的构造器

## 相关示例

见 [README.md](README.md) 中的 `code/` 索引。
