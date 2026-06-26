// var 提升与函数声明

// 函数声明整体提升
console.log(fn()); // 1
function fn() {
  return 1;
}

// var 只提升声明，赋值为 undefined
console.log(v); // undefined
var v = 10;

// var 无块作用域
if (true) {
  var leaked = 'hello';
}
console.log(leaked); // 'hello'

// 函数体内 var 与参数同名：共享同一绑定，赋参后再声明 var 仍读参数值
function demo(c) {
  console.log(c); // 2
  var c = 3;
}
demo(2);
