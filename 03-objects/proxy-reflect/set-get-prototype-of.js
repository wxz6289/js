/* 
let target = { };
let proxy = new Proxy(target, {
    getPrototypeOf(trapTarget){
        return null;
    },
    setPrototypeOf(trapTarget, proto){
        return false;
    }
});
let targetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy);
console.log(targetProto === proxyProto);

console.log(targetProto === Object.prototype);
console.log(proxyProto === Object.prototype);
console.log(proxyProto);

Object.setPrototypeOf(target, {});
Object.setPrototypeOf(proxy, {});

 */

/* let target = {};
let proxy = new Proxy(target, {
    getPrototypeOf(trapTarget) {
        return Reflect.getPrototypeOf(trapTarget);
    },
    setPrototypeOf(trapTarget, proto) {
        return Reflect.setPrototypeOf(trapTarget, proto);
    }
});

let targetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy);

console.log(targetProto === proxyProto);
console.log(proxyProto === Object.prototype);

Object.setPrototypeOf(target, {});
Object.setPrototypeOf(proxy, {}); */

/* let result1 = Object.getPrototypeOf(1);
console.log(result1 === Number.prototype);
// Reflect.getPrototypeOf(1); */

let target1 = {};
let result1 = Object.setPrototypeOf(target1, {});
console.log(result1 === target1);

let target2 = {};
let result2 = Reflect.setPrototypeOf(target2, {});
console.log(result2 === target2);
console.log(result2);









