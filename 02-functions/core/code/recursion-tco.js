// 尾调用优化（TCO）与 trampoline

function fooNaive(x) {
  if (x <= 1) return 1;
  return x / 2 + fooNaive(x - 1); // 非尾调用，深递归可能栈溢出
}

function fooAccumulator() {
  function _foo(acc, x) {
    if (x <= 1) return acc;
    return _foo(x / 2 + acc, x - 1); // 尾调用形式
  }
  return (x) => _foo(1, x);
}

function trampoline(res) {
  while (typeof res === 'function') {
    res = res();
  }
  return res;
}

function fooTrampoline() {
  function _foo(acc, x) {
    if (x <= 1) return acc;
    return () => _foo(x / 2 + acc, x - 1);
  }
  return (x) => trampoline(_foo(1, x));
}

function fooIterative(x) {
  let acc = 1;
  while (x > 1) {
    acc = x / 2 + acc;
    x -= 1;
  }
  return acc;
}

const n = 1000;
console.log('accumulator:', fooAccumulator()(n));
console.log('trampoline:', fooTrampoline()(n));
console.log('iterative:', fooIterative(n));

// 检测当前引擎是否支持 TCO（仅 Safari 等少数引擎）
function detectTco() {
  try {
    (function tco(x) {
      if (x <= 5e5) return tco(x + 1);
    })(1);
    return true;
  } catch {
    return false;
  }
}
console.log('TCO enabled:', detectTco());
