// IIFE：立即执行函数表达式，创建独立作用域

var a = 2;

(function iife() {
  var a = 3;
  console.log('IIFE 内:', a); // 3
})();

console.log('IIFE 外:', a); // 2
