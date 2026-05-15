/* let sayMixin = {
    sayHi(){
        console.log(`Hello ${this.name}`);
    },
    sayBye(){
        console.log(`Bye ${this.name}`);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayMixin);

new User("Tom").sayHi(); */

let Mixin = {
    say(phrase){
        console.log(`${phrase}`);
    }
}

let sayMixin = {
    __proto__: Mixin,
    sayHi(){
        super.say(`Hello ${this.name}`);
    },
    sayBye(){
        super.say(`Bye ${this.name}`);
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayMixin);

new User("Tom").sayHi(); 
