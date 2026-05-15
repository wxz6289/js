// class Rabbit {}

/* function Rabbit(){}

let r = new Rabbit();
console.log(r instanceof  Rabbit); */

class Animal {
    // static [Symbol.hasInstance](obj){
    //     if(obj.canEat) return true;
    // }
}

// class Animal {}

class Rabbit extends Animal {}

let obj = { canEat: true };
let a = new Animal();
console.log(obj instanceof Animal);

let r = new Rabbit();
console.log(r instanceof Animal);
Rabbit.prototype = {}
console.log(r instanceof Animal);

console.log(r.__proto__ === Animal.prototype);
console.log(r.__proto__.__proto__ === Animal.prototype);

// console.log(r.isPrototypeOf(a));



