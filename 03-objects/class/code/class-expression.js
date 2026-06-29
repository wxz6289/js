// 类表达式、动态创建类、计算属性名方法

const User = class MyClass {
  sayHi() {
    console.log('Hello from', MyClass.name);
  }
};
new User().sayHi();

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

const Hello = makeClass('Hello');
new Hello().sayHi();

function methodName() {
  return 'sayHi';
}

class User2 {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value && value.length < 4) {
      throw new Error('name is too short');
    }
    this._name = value;
  }
  [methodName()]() {
    console.log(`Hi ${this.name}`);
  }
}

const u = new User2('King');
console.log(u.name);
u[methodName()]();
u.name = 'Dreamer';
console.log(u.name);
