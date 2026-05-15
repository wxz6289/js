/* function foo(x) {
  if (x <= 1) return 1;
  return x / 2 + foo(x - 1);
} */
/* 
"use strict";

const foo = (function foo() {
  function _foo(acc, x) {
    if (x <= 1) return acc;
    return _foo((x / 2) + acc, x - 1)
  }
  return function (x) {
    return _foo(1, x);
  }
})() */

/* // trampoline技术

function trampoline(res) {
  while (typeof res === 'function') {
    res = res();
  }
  return res;
}

const foo = (function foo() {
  function _foo(acc, x) {
    if (x <= 1) return acc;
    return function partial() {
      return _foo((x / 2) + acc, x - 1);
    };
  }
  return function (x) {
    return trampoline(_foo(1, x));
  };
})() */

/* // 递归展开
function foo(x) {
  let acc = 1;
  while (x > 1) {
    acc = x / 2 + acc;
    x = x - 1;
  }
  return acc;
} */

function foo(x) {
  let acc = 1;
  function _foo() {
    if (x > 1) {
      acc = acc + (x / 2);
      x = x - 1;
      return _foo();
    }
  }

  while (x > 1) {
    try {
      _foo();
    } catch (e) { }
  }
  return acc;
}

console.log(foo(122233))


/* const isTco = (function isTco() {
  let TCO_ENABLED = false;
  try {
    (function foo(x) {
      if (x <= 5e5) return foo(x + 1);
    }(1));
    TCO_ENABLED = true;
  } catch (e) {
    TCO_ENABLED = false;
  }
  return TCO_ENABLED
})();

console.log(isTco); */