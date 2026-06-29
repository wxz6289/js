// 扩展内建类：实例方法可继承，静态方法默认不继承

class Cat extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

const c = new Cat('hello kitty');
console.log(c.name);
console.log(c.hasOwnProperty('name')); // true — 继承自 Object.prototype

// 内建类的静态方法（Object.keys 等）不会随 extends 传递到子类
console.log(typeof Cat.keys); // undefined
console.log(Object.keys(c)); // ['name']

const merged = Object.assign({}, { a: 12 }, { b: 13 });
console.log(merged);

const created = Object.create({ a: 12 });
console.log(created.a); // 12 — 在原型上，非自有属性
