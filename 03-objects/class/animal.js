class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed += speed;
        console.log(`${this.name} run with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stoped`);
    }
}

console.log(Animal.toString());

function Person(name) {
    this.name = name;
}

console.log(Person)

// let animal = new Animal("An animal");
// console.log(animal.name, animal.speed);
// animal.run(3);
// console.log(animal.name, animal.speed);
// animal.stop();
// console.log(animal.name, animal.speed);

class Rabbit extends Animal {
    constructor(name) {
        super(name);
    }

    run(speed) {
        super.run(speed);
        console.log("Rabbit runing");
    }

    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("Rabbit");

rabbit.run(6);
rabbit.hide();
console.log(rabbit.name, rabbit.speed);
rabbit.stop();
console.log(rabbit.name, rabbit.speed);

let User = class MyClass {
    log() {
        console.log(MyClass);
    }
}

new User().log();

// console.log(MyClass);

class Dog {
    #name
    constructor(name) {
        this.name = name
    }
    get name() {
        return this.#name
    }

    set name(value) {
        if (!value || value.length < 4) {
            throw new Error("name is too short");
        }
        this.#name = value;
    }
}

let dog = new Dog('Hello');
console.log(dog.name);
dog.name = 'World';
console.log(dog.name);
console.log(Object.getOwnPropertyNames(Dog.prototype))
