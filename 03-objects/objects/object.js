var o = { a: 2, b: 3};
console.log(o.__proto__);
console.log(o.prototype);
console.log(Object.getPrototypeOf(o));
var o1 = { b: 4, c: 5};
Object.setPrototypeOf(o1, o); // 这个函数有性能问题
console.log(Object.getPrototypeOf(o1));
console.log(o1.a, o1.b, o1.c, o1.d);