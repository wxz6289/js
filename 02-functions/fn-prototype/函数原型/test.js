/* let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true */
/* 
function Rabbit(name) {
    this.name = name;
}

let r = new Rabbit("White");

console.log(Rabbit.prototype.constructor === Rabbit);

console.log(r.constructor === Rabbit);
console.log(r.__proto__);

Rabbit.prototype = {
    jumps: true,
  //  constructor: Rabbit 手动重新创建constructor
};

// Rabbit.prototype.jumps = true;  //添加/删除属性到默认 "prototype" 而不是将其整个覆盖

let r2 = new Rabbit("King");
console.log(r2.constructor == Rabbit);
 */

/* function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
// Rabbit.prototype = {};
// Rabbit.prototype.eats = false;
// delete rabbit.eats
delete Rabbit.prototype.eats;

console.log(rabbit.eats); // true */
/* 
function Rabbit(name){
    this.name = name
}

let w = new Rabbit("White");

Rabbit.prototype = {};

console.log(w);


let v = new w.constructor("Black");

console.log(v.name); */

/* let obj = {};
console.log(obj);
console.log(obj.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); */

/* let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);
 */

/* Function.prototype.defer = function(ms){
    setTimeout(this, ms);
}

function f(){
    console.log("Hello");
}

f.defer(1000); */

function f(a, b){
    console.log(a + b);
}

Function.prototype.defer = function(ms){
    let self = this;
    return function(){
        setTimeout(self, ms, ...arguments);
    }
}

f.defer(1000)(1, 2)










