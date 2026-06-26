// 循环中的函数闭包
//
// 在循环内创建函数并稍后执行时，函数捕获的是变量的「绑定」，而非某次迭代当时的「值」。
// 结果取决于循环变量如何声明。

function run(fns) {
  fns.forEach((fn) => fn());
}

// 1. var：同一作用域内只有一个 i，所有闭包共享该绑定
function demoVar() {
  const fns = [];
  for (var i = 0; i < 3; i++) {
    fns.push(function () {
      console.log(i);
    });
  }
  run(fns); // 3, 3, 3
}

// 2. IIFE：每次迭代把当前 i 的值传入，闭包捕获的是参数 value
function demoIIFE() {
  const fns = [];
  for (var i = 0; i < 3; i++) {
    fns.push((function (value) {
      return function () {
        console.log(value);
      };
    })(i));
  }
  run(fns); // 0, 1, 2
}

// 3. let：每次迭代创建新的块级绑定，闭包各自持有独立的 i
function demoLet() {
  const fns = [];
  for (let i = 0; i < 3; i++) {
    fns.push(function () {
      console.log(i);
    });
  }
  run(fns); // 0, 1, 2
}

// 4. for...in / for...of：const 在每次迭代中同样是新的块级绑定
function demoForIn() {
  const obj = { name: 'King', age: 20 };
  const fns = [];
  for (const key in obj) {
    fns.push(function () {
      console.log(key);
    });
  }
  run(fns); // 'name', 'age'
}

function demoForOf() {
  const arrs = [1, 2, 3];
  const fns = [];
  for (const value of arrs) {
    fns.push(function () {
      console.log(value);
    });
  }
  run(fns); // 1, 2, 3
}

console.log('--- var ---');
demoVar();

console.log('--- IIFE ---');
demoIIFE();

console.log('--- let ---');
demoLet();

console.log('--- for...in (const) ---');
demoForIn();

console.log('--- for...of (const) ---');
demoForOf();
