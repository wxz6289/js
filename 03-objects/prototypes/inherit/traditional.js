function Animal(){
}

function Dog(){

}

Object.defineProperties(Animal.prototype, {
    name: {
        value: "animal"
    },
    say: {
        value(){
            return `I'm a ${this.name}`
        }
    }
});

// Dog.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Dog,
        enumerable: false
    },
    name: {
        value: "Dog"
    }
});

let d = new Dog()
console.log(d.say());
console.log(Dog.prototype.constructor) // contructor应该指向构造函数本身