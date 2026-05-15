/* let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

for (const prop in pockets) {
    console.log(prop, pockets[prop]);
}
 */
/* 
let animal = {
    _f: undefined,
    eat() {
        this.full = true;
    },
    set f(value){
        this._f = value;
    },
    get f(){
        return this._f;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
rabbit.f = 12;
console.log(animal.f, rabbit.f);
console.log(animal.full, rabbit.full); */

/* 
let animal = {
    eats: true
};

let rabbit = Object.create(animal, { name: {
    value: "White",
    configurable: true,
    enumerable: true,
    writeable: true
}});

console.log(rabbit);
console.log(Object.getPrototypeOf(rabbit) === animal);
Object.setPrototypeOf(rabbit, {});
console.log(rabbit); */
/* 

let dictionary = Object.create(null, { toString: {
    value(){
        return Object.keys(this).join("|");
    },
    enumerable: false
}});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (const key in dictionary) {
    console.log(key);
}

console.log(dictionary.toString()); */

/* 
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi(); */

/* 
function Person(){

} */

/* Person.prototype.getInfo = function(){
    console.log(`${this.name} ${this.age}`);
} */

//let person = new Person();

/* Person.prototype = {
    constructor: Person,
    name: "King", 
    age: 20,
    getInfo(){
        console.log(`${this.name} ${this.age}`);
    }
};
let person = new Person(); // 注意，创建实例必须在重写了原型对象之后，不然创建的对象的引用仍然是最初的原型，并获取不到重写后的属性和方法。

person.getInfo();

console.log(person.__proto__ === Person);
console.log(person.__proto__);
console.log(Person.prototype);
console.log(person.constructor === Person);
console.log(Person.prototype.constructor); */
/* 
let p = new Person();

Person.prototype.name = "King";
Person.prototype.age = 20;
Person.prototype.getInfo = function(){
    console.log(`${this.name} ${this.age}`);
}

p.getInfo(); */



/* 
创建对象的方式
1. new Object()
2. 字面量
3. 工厂模式
4. 自定义构造函数模式
5. 原型模式
    1. 动态添加原型对象属性
    2. 字面量形式添加对象原型属性，并重写构造函数
6. 构造函数模式与原型模式的组合模式
7. 动态原型模式
8. 寄生构造函数模式


*/
/* // 组合模式
function Person(name, age){
    this.name = name;
    this.age = age;
    this.friends = ["Tom", "Kali"]
}

Person.prototype = {
    constuctor: Person,
    sayName(){
        console.log(this.name);
    }
}

let p1 = new Person("King", 23);
let p2 = new Person("Panpan", 20);
p1.sayName();
p2.sayName();
p1.friends.push("JIM");
console.log(p2.friends);
console.log(p1.friends);
 */

/* // 动态原型
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.friends = ["Tom", "Kali"];
    if(typeof this.sayName !== 'function'){
        Person.prototype.sayName = function(){
            console.log(this.name);
        }
    }
}

let p = new Person("King", 20);
p.sayName(); */


function Person(name, age){
    let o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function(){
        console.log(this.name);
    };
    return o;
}

let p = new Person("King", 20);
p.sayName();
console.log(p instanceof Person);













