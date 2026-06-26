function getType(ctor){
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/)
  return match ? match[2] : ctor === null ? 'null' : ''
}

const Person = class {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name);
  }
}

console.log(getType(Person));
console.log(Person.toString());
console.log(Person.name)