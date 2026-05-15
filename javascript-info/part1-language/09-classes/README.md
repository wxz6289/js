# 1.9 类

## class 基本语法

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
// User 本质上是一个函数
typeof User === "function";
```
- `class` 声明的函数需要用 `new` 调用
- 类方法不可枚举（`enumerable: false`）
- 类体自动使用严格模式
- 类声明不提升（存在 TDZ）

## 类表达式

```js
let User = class MyClass {
  sayHi() { console.log(MyClass); } // MyClass 仅在类内部可见
};
```

## 字段 (Class Fields)

```js
class User {
  name = "John";        // 实例字段（每个实例独立）
  static TYPE = "USER"; // 静态字段（ES2022）

  // 私有字段 (ES2022)
  #password = "secret";
  #privateMethod() { return this.#password; }
  checkPassword(p) { return this.#privateMethod() === p; }
}
```
- 私有字段 `#name` 真正私有，编译时强制
- 子类不能访问父类的 `#private` 字段/method

## extends 继承

```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a sound.`); }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);       // 必须先调用 super() 才能用 this
    this.breed = breed;
  }
  speak() {
    super.speak();     // 调用父类方法
    console.log(`${this.name} barks.`);
  }
}
```
- `super.method()` 调用父类方法（使用 `[[HomeObject]]` 机制）
- `super()` 调用父类构造函数
- 箭头函数没有 `super`，从外层继承

## 静态方法与静态属性

```js
class Article {
  static publisher = "Ilya Kantor";  // 静态字段
  static compare(a, b) {             // 静态方法
    return a.date - b.date;
  }
}
Article.compare(article1, article2);
// 静态方法中的 this 指向类本身（不是实例）
```

## extends 内置类

```js
class PowerArray extends Array {
  isEmpty() { return this.length === 0; }
  // map/filter 等返回普通 Array? 用 Symbol.species 控制
  static get [Symbol.species]() { return Array; }
}
```

## Mixin 模式

```js
let sayMixin = {
  say(phrase) { console.log(phrase); }
};
let sayHiMixin = {
  __proto__: sayMixin,
  sayHi() { super.say(`Hello ${this.name}`); }
};
Object.assign(User.prototype, sayHiMixin);
```

## instanceof

```js
obj instanceof Class          // 检查原型链
Class[Symbol.hasInstance](obj) // 自定义行为
```

- `instanceof` 检查的是 `Class.prototype` 是否在 `obj` 的原型链上
- 跨 iframe/窗口可能失败（不同执行上下文有不同原型）

## 私有字段与方法的补充

```js
class Counter {
  #count = 0;
  increment() { this.#count++; }  // 必须在类体内引用 #count
}
let c = new Counter();
c.#count;       // SyntaxError — 不能在类外部访问
c['#count'];    // undefined — 不是字符串键
```
- 私有字段名必须在类体解析时就已知
- 不能用 `this[name]` 或方括号动态访问
