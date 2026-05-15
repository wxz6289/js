// 磕了药的typeof
function getType(x){
    let toString = Object.prototype.toString;
    return toString.call(x).slice(8, -1);
}

console.log(getType(12));
console.log(getType(null));
console.log(getType(false));


let user = {
    [Symbol.toStringTag]: "User"
};

console.log({}.toString.call(user));
console.log(getType(user));

console.log(getType([]));
console.log(getType({}));
console.log(getType([{name: 12}]));
console.log(getType(null));

console.log(getType(Symbol("test")));


function checkType(type){
    return function(v){
        return Object.prototype.toString.call(v).slice(8,-1).toLowerCase() === type;
    }
}

const checkIsObject = checkType('object');
console.log(checkIsObject({}));






/* 
class User {
    [Symbol.toStringTag](){
        return "User"
    }
}

let u = new User();
console.log(u);

console.log(getType(u)); */

/* 
function A() { }
function B(){}
A.prototype = B.prototype = {}

let a = new A();
console.log(a instanceof B);
console.log(a instanceof A); */



