// 按 arguments.length 分发重载（函数 length 与实参个数匹配）

const ninja = {};

function addMethod(obj, name, fn) {
  const old = obj[name];
  obj[name] = function () {
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments);
    }
    if (typeof old === 'function') {
      return old.apply(this, arguments);
    }
  };
}

addMethod(ninja, 'sum', function (a) {
  return a;
});
addMethod(ninja, 'sum', function (a, b) {
  return a + b;
});
addMethod(ninja, 'sum', function (a, b, c) {
  return a + b + c;
});
addMethod(ninja, 'sum', function (a, b, c, d) {
  return a + b + c + d;
});

console.log(ninja.sum(2));       // 2
console.log(ninja.sum(2, 3));    // 5
console.log(ninja.sum(2, 1, 5)); // 8
console.log(ninja.sum(2, 4, 6, 9)); // 21
