/* class User {
    constructor(name) {
        this.name = name;
    }
    sayHi(){
        console.log(`Hi ${this.name}`);
    }
}

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(Object.getOwnPropertyDescriptors(User.prototype)); */
/* 
// 类表达式
let User = class MyClass{
    sayHi(){
        console.log("Hello", MyClass);
    }
}

let u = new User();
u.sayHi(); */


/* 
// 动态创建类
function makeClass(phrase) {
    return class {
        sayHi(){
            console.log(`${phrase}`);
        }
    };
}

let Hello = makeClass("Hello");

new Hello().sayHi(); */

function f(){
    return "sayHi";
}
class User {
    constructor(name) {
        this.name = name; // 调用setter
    }
    get name(){
        return this._name;
    }

    set name(value){
        console.log("调用了我");
        if(value && value.length < 4){
            throw new Error("name is too short");
        } else {
            this._name = value;
        }
    }
    [f()](){
        console.log(`Hi ${this.name}`);
    }
}


let u = new User("King");
// console.log(u.name);
console.log(u);
// u[f()]();
// u.name = "Panpan"



/* u.name = "Fuck";
console.log(u.name);
let u2 = new User(); */

