// 词法作用域：查找规则在书写时确定，与调用位置无关

console.log('--- 最近绑定 ---');

let value = 'Surprise!';

function f() {
  const value = 'the closest value';

  function g() {
    console.log(value); // 取 f 作用域内的 value，而非全局
  }

  return g;
}

f()(); // the closest value

console.log('--- IIFE 与外层作用域 ---');

var a1 = 10;

function fun_a() {
  console.log(a1); // 沿词法作用域链查找，得到外层 var a1 = 10
}

(function (fn) {
  var a1 = 20; // 仅在此 IIFE 内有效，不影响 fun_a 的词法环境
  fn();
})(fun_a); // 10
