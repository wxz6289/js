function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? 'null' : '';
}

const Person = class {
  constructor(name) {
    this.name = name;
  }
};

console.log(getType(Person)); // Person
console.log(Person.name); // Person
