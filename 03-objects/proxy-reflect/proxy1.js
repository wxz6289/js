/* 
let target = {};
let proxy = new Proxy(target, {});
proxy.name = "haha";
console.log(target.name);
console.log(proxy.name);
target.age = 23;
console.log(proxy.age);
console.log(proxy);
console.log(target);
console.log(target === proxy); 
*/

/* 
// get 
let target = {
    name: "target"
};
let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver){
        if(!trapTarget.hasOwnProperty(key)){
            if(isNaN(value)){
                throw new TypeError("属性值必须是数字！");
            }
        }
        return Reflect.set(trapTarget, key, value, receiver);
    }
});


proxy.count = 1;
console.log(proxy.count, target.count);
proxy.name = "King";
console.log(proxy.name, target.name);

target.lname = "Zhao";
console.log(proxy.lname, target.lname);

proxy.fname = "Wang";
console.log(proxy.fname, target.fname);
 */

/* let target = {
    name: "target"
};
let proxy = new Proxy(target, {
    get(trapTarget, key, receiver){
       // console.log(">>", receiver);
        
        if(!(key in receiver)){
       // if(!trapTarget.hasOwnProperty(key)){
            throw new TypeError(`不能访问不再的属性: ${key}`);
        }
     return Reflect.get(trapTarget, key, receiver);
    }
});

console.log(proxy.name);
console.log(target.age);
target.fname = "Haaa";
console.log(proxy.fname);
console.log(proxy.age); */

/* 
let target = {
    value: 42,
    name: "King"
};
// console.log("value" in target);
// console.log("toString" in target);

let proxy = new Proxy(target, {
    has(trapTarget, key){
        if(key === "value"){
            return false;
        } else {
            return Reflect.has(trapTarget, key);
        }
    }
});

console.log("value" in proxy);
console.log("toString" in proxy);
console.log("name" in proxy); */

/* 
let target = {
    name: "King", 
    value: 42
};

Object.defineProperty(target, 'name', { configurable: false });

console.log("value" in target);
let result1 = delete target.value;
console.log("value" in target);
console.log(result1);

console.log("name" in target);
let result2 = delete target.name;
console.log("name" in target);
console.log(result2); 
*/

let target = { name: "King", value: 20 };

let proxy = new Proxy(target, {
    deleteProperty(trapTarget, key){
        if("value" === key){
            return false;
        } else {
            return Reflect.deleteProperty(trapTarget, key);
        }
    }
});

console.log("value" in proxy);
let result1 = delete proxy.value;
console.log("value" in proxy);
console.log(result1);
console.log("name:");
console.log("name" in proxy);
let result2 = delete proxy.name;
console.log("name" in proxy);
console.log(result2); 
console.log("target:");
console.log("name" in target);
console.log("value" in target);



















