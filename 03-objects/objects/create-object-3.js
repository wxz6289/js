var a = { a: 1};
var b = Object.create(a);
console.log(b.a);

var c = Object.create(b);
console.log(c.a);

var d = Object.create(null);
console.log(d.a);
console.log(d.hasOwnProperty);
console.log(a.hasOwnProperty);
