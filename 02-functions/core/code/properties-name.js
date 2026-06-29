// Function.name：具名函数取函数名，匿名函数取赋值变量或属性名

var a = function b() {
  return this;
};

console.log(a.name); // b

var e = function () {};
console.log(e.name); // e

function c() {}
console.log(c.name); // c

var f = {
  e: function f() {},
};
console.log(f.e.name); // e
