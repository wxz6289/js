// with 将对象属性挂到作用域链；var 声明泄漏到外层，let 为块级局部
// 严格模式下禁止使用 with

let obj = { a: 12, c: 21 };
with (obj) {
  var b = 10;
  let c = 30;
  console.log(a, b, c); // 12 10 30
}

console.log(b); // 10 — var 泄漏
console.log(obj); // { a: 12, c: 21, b: 10 }
