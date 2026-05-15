# 1.8 原型，继承

## 原型 (Prototype)

每个对象都有一个隐藏的 `[[Prototype]]` 属性，指向另一个对象（或 null）。

```js
let animal = { eats: true };
let rabbit = { jumps: true };

rabbit.__proto__ = animal;  // 设置原型（旧式，但广泛支持）
// 或
Object.setPrototypeOf(rabbit, animal); // 现代方式
Object.getPrototypeOf(rabbit);         // 读取原型

// 原型继承 — 属性查找沿原型链向上
rabbit.eats;  // true（来自 animal — 原型继承）
```

## 原型链规则

- 查找属性时，先从对象自身找，再沿 `[[Prototype]]` 向上
- 写入/删除属性始终在对象自身进行（不修改原型）
- 访问器属性(setter/getter)的访问沿原型链，但 setter 在自身调用
- `this` 始终指向点号前的对象（无论属性在原型链的哪一层找到）
- 不能形成循环引用

## 函数原型与 F.prototype

```js
function Rabbit(name) { this.name = name; }
Rabbit.prototype.eats = true;     // F.prototype 不是 F 的原型！
// rabbit.__proto__ === Rabbit.prototype → true
// Rabbit.__proto__ === Function.prototype → true

// 默认 prototype: { constructor: Rabbit }
Rabbit.prototype.constructor === Rabbit; // true
```

**new 操作符创建的对象**的 `[[Prototype]]` 设为构造函数的 `prototype`。

## 原生原型

```js
// 内置对象的原型链
[1, 2, 3].__proto__ === Array.prototype;              // true
Array.prototype.__proto__ === Object.prototype;        // true
Object.prototype.__proto__ === null;                   // true (原型链终点)

function f() {}
f.__proto__ === Function.prototype;                    // true
```

- 可以扩展原生原型（polyfill），但不推荐在非 polyfill 场景修改
- `"hello".toUpperCase()` 使用了 `String.prototype`

## 原型方法（代替 __proto__）

```js
Object.getPrototypeOf(obj)            // 读取 [[Prototype]]
Object.setPrototypeOf(obj, proto)     // 设置 [[Prototype]]（很慢！）
Object.create(proto, descriptors?)   // 以 proto 为原型创建对象
```

## Object.create — 比 __proto__ 更好的方式

```js
// 创建无原型对象（纯字典）
let dict = Object.create(null);
"toString" in dict; // false — 无继承

// 完整的浅拷贝（含描述符和 Symbol）
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

## 继承方式的演进

```js
// 1. 原型链继承（共享引用问题）
Child.prototype = new Parent();

// 2. 借用构造函数
function Child() { Parent.call(this); }

// 3. 组合继承 = 原型链 + 借用构造函数

// 4. 原型式继承 Object.create(proto)

// 5. 寄生式继承（工厂函数包装 Object.create）

// 6. 寄生组合式继承（最完善的传统方式）
function Child() { Parent.call(this); }
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// 7. class extends（ES6 — 推荐）
class Child extends Parent {}
```
