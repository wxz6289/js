// 默认参数：三种写法对比

function demoOrDefault() {
  function log(x, y) {
    y = y || 'World';
    console.log(x, y);
  }
  log('Hello', 'World');
  log('Hello');
  log('Hello', ''); // '' 被当作 falsy，意外变成 World
}

function demoTypeofCheck() {
  function log(x, y) {
    if (typeof y === 'undefined') {
      y = 'World';
    }
    console.log(x, y);
  }
  log('Hello');
  log('Hello', '');
  log('hello', 0);
  log('hello', undefined);
}

function demoEs6Default() {
  function log(x, y = 'World') {
    console.log(x, y);
  }
  log('Hello');
  log('Hello', '');
  log('hello', 0);
  log('hello', undefined); // 显式 undefined 会触发默认值
}

function demoLazyDefault() {
  let x = 99;
  function foo(p = x + 1) {
    console.log(p);
  }
  foo(); // 100
  x = 100;
  foo(); // 101 — 每次调用重新求值
}

function demoDestructuring() {
  function foo({ x, y = 5 } = {}) {
    console.log(x, y);
  }
  foo({});
  foo({ x: 1 });
  foo({ x: 1, y: 3 });
  foo(); // 双重默认值避免 undefined 解构报错
}

function demoM1M2() {
  function m1({ x = 0, y = 0 } = {}) {
    return [x, y];
  }
  function m2({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
  }
  console.log('m1:', m1(), m1({ x: 2 }), m1({ y: 2 }));
  console.log('m2:', m2(), m2({ x: 2 }), m2({ y: 2 }));
}

function demoNonTailDefault() {
  function f(x = 1, y) {
    return [x, y];
  }
  // f(); // TypeError
  console.log(f(2));           // [2, undefined]
  console.log(f(undefined, 1)); // [1, 1]
}

function demoThrowMissing() {
  function throwMissing() {
    throw new Error('Missing parameter');
  }
  function foo(mustBeProvided = throwMissing()) {
    return mustBeProvided;
  }
  try {
    foo();
  } catch (e) {
    console.log(e.message);
  }
}

function demoChainedDefaults() {
  function bar(val) {
    return y + val;
  }
  var y = 2;
  function foo(x = y + 3, z = bar(x)) {
    console.log(x, z);
  }
  foo(undefined, 10);
  foo(10);
}

const demos = [
  ['|| 默认值', demoOrDefault],
  ['typeof 检查', demoTypeofCheck],
  ['ES6 默认参数', demoEs6Default],
  ['惰性求值', demoLazyDefault],
  ['解构 + 默认', demoDestructuring],
  ['m1 / m2', demoM1M2],
  ['非尾参数默认', demoNonTailDefault],
  ['throw 作默认', demoThrowMissing],
  ['链式默认', demoChainedDefaults],
];

for (const [label, fn] of demos) {
  console.log(`\n--- ${label} ---`);
  fn();
}

// 以下场景在 Node 严格模式下会报错，仅作说明：
// - 无默认参数时允许同名形参 foo(x, x, y)，取最后一个
// - 有默认参数时同名形参 SyntaxError
// - 默认参数作用域 TDZ：function f(y = x) { let x = 2; } 引用报错
// - 参数默认值、解构、剩余参数存在时，函数体不能显式 'use strict'
