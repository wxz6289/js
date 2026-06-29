// 递归与 arguments.callee：函数引用被置 null 后仍可通过 callee 调用

let factorial = function (n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
};

const another = factorial;
factorial = null;
console.log(another(5)); // 120

// 推荐：具名函数表达式，不依赖 callee
let factorialNamed = function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
const ref = factorialNamed;
factorialNamed = null;
console.log(ref(5)); // 120

// Math.max.apply 传数组
console.log(Math.max.apply(Math, [12, 34, 2, 45, 32]));
