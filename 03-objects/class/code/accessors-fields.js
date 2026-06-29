// 私有字段 #field 与访问器

class Dog {
  #name;
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    if (!value || value.length < 4) {
      throw new Error('name is too short');
    }
    this.#name = value;
  }
}

const dog = new Dog('Hello');
console.log(dog.name);
dog.name = 'World';
console.log(dog.name);
console.log(Object.getOwnPropertyNames(Dog.prototype)); // 不含 #name
