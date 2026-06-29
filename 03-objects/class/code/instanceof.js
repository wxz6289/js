// instanceof：沿原型链检测；可由 Symbol.hasInstance 自定义

class Animal {
  // static [Symbol.hasInstance](obj) {
  //   return obj.canEat === true;
  // }
}

class Rabbit extends Animal {}

const obj = { canEat: true };
const a = new Animal();
const r = new Rabbit();

console.log(obj instanceof Animal); // false（取消注释 hasInstance 后为 true）
console.log(a instanceof Animal); // true
console.log(r instanceof Animal); // true — 继承链
console.log(r instanceof Rabbit); // true
console.log(Animal.prototype.isPrototypeOf(a)); // 等价视角

// instanceof 看的是 prototype，不是构造函数本身
function A() {}
function B() {}
A.prototype = B.prototype = {};
const inst = new A();
console.log(inst instanceof B); // true
console.log(inst instanceof A); // true
