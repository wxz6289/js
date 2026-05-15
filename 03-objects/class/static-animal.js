class Animal {}
class Rabbit extends Animal {};

console.log(Rabbit.__proto__ === Animal);
console.log(Animal.__proto__ === Function.prototype);
console.log(Rabbit.prototype.__proto__ === Animal.prototype);


