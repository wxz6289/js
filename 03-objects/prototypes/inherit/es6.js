class Animal {
    constructor(){
        this.super();
        this.name = "Animal"
    }
    say(){
        return this.name;
    }
}

class Dog extends Animal {
    constructor(){
       this.super();
       this.name = "Dog"
    }
}

let d = new Dog();
console.log(d.say());
console.log(Dog.prototype.constructor);