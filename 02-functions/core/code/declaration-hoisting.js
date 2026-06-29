// 函数声明 vs 函数表达式：提升顺序

console.log('--- 表达式覆盖声明 ---');

var fn = function () {
  console.log('fn1');
};

function fn() {
  console.log('fn2');
}

fn(); // fn1 — 变量提升后，赋值表达式覆盖函数声明

console.log('--- 声明优先于 var ---');

var fn2;

function fn2() {
  console.log('fn2');
}

fn2(); // fn2 — 提升后先得到函数声明

fn2 = function () {
  console.log('fn1');
};

fn2(); // fn1 — 赋值后覆盖
