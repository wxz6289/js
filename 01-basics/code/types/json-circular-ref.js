// 循环引用导致 JSON.stringify 抛错

let o = {};
let a = { b: 42, c: o, d: function () {} };
o.e = a;

console.log(a);
// JSON.stringify(a); // TypeError: Converting circular structure to JSON
