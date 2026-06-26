// "use strict";

let obj = { a: 12, c: 21 };
with (obj) {
  var b = 10;
  let c = 30;
  console.log(a, b, c);
}

console.log(b);
console.log(obj);