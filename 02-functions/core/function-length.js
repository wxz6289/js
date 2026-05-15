let a = (function (a) {}).length;
console.log(a);
a = (function(a =5) {}).length;
console.log(a);
a = (function(a, b, c =5) {}).length;
console.log(a);
// 函数的length属性是指预期传入函数的参数个数,如果被设置为默认值之后，就不在预期之中了。也就是length的值是函数参数个数减去默认参数个数
a = (function(...args) {}).length;
console.log(a, "...");
a = (function(a = 0, b, c) {}).length;
console.log(a);
a = (function(a, b = 1, c) {}).length;
console.log(a);
// 如果设置了默认参数不是尾参数，那么length的属性对于设置了默认参数之后的参数(无论是否默认)不计数了
