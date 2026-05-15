/* function f(phrase){
    return class {
        sayHi(){
            console.log(phrase);
        }
    }
}

class User extends f("Hello") {}
new User().sayHi(); */

/* class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit"); 
console.log(rabbit.name); */


class Animal extends Object {
    constructor(name){
        super();
        this.name = name;
    }
}

let animal = new Animal("Animal");
console.log(animal.prototype == Object.prototype);
console.log(animal.hasOwnProperty('name'));

for (const prop in animal) {
   console.log(prop, ":", animal[prop]);  
}

