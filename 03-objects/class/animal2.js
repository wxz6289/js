let animal = {
    name: "Animal",
    eat(){
        console.log(this.name, "eats");
    }
};

let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat(){
        super.eat(); // rabbit.eat.[[HomeObject]] = rabbit
        //this.__proto__.eat.call(this);
    }
};

// rabbit.eat();

let longEar = {
    __proto__: rabbit,
    name: "Long Ear",
    eat(){
        super.eat();
        //this.__proto__.eat.call(this); // 这里出现了循环调用 => longEar.__proto__.eat.call(this) => rabbit.eat.call(this);
    }
};

longEar.eat();

let plant = {
    eat(){
        console.log("I'm a plant");
    }
}

let tree = {
    __proto__: plant,
    eat: rabbit.eat
};

tree.eat();