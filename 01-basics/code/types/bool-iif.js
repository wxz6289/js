// ! 将 function 声明转为表达式，从而支持 IIFE
// 等价于 (function () { ... })()

!function () {
  console.log('IIFE via !');
}();
