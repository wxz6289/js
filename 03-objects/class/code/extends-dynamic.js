// extends 后可为任意表达式；继承内建 Object

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

class User extends makeClass('Hello') {}
new User().sayHi();

class Animal extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

const animal = new Animal('Animal');
animal.__proto__.sayHi = function () {
  console.log('Animal sayHi');
};
animal.sayHi();
console.log(animal.hasOwnProperty('name')); // true

for (const prop of Object.keys(animal)) {
  console.log(prop, ':', animal[prop]);
}
