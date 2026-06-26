// undefined、函数在 JSON 中的序列化行为

console.log(JSON.stringify(undefined)); // undefined（无输出）
console.log(JSON.stringify(function () {})); // undefined（无输出）
console.log(JSON.stringify([1, undefined, null, {}, function () {}]));
// [1,null,null,{}]

var a = { c: 'King', b: b };
var b = { a: a, c: 12 };
console.log(JSON.stringify(b)); // {"c":"King","b":{"c":12}}
