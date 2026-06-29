// 类本质是函数；prototype.constructor 指回类本身

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}

console.log(typeof User); // function
console.log(User === User.prototype.constructor); // true
console.log(Object.keys(User.prototype)); // ['constructor', 'sayHi']

const u = new User('King');
u.sayHi();
