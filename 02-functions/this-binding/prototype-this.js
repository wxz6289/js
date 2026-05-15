class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

Person.prototype.name = 'Dreamer'

const p = new Person('King');
p.sayName();
console.log(Object.getPrototypeOf(p).sayName);
console.log(Object.prototype.hasOwnProperty.call(p, 'sayName'))