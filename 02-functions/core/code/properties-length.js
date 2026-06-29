// Function.length：预期传入的形参个数（不含剩余参数；默认参数之后的参数不计数）

const cases = [
  [function (a) {}, 1],
  [function (a = 5) {}, 0],
  [function (a, b, c = 5) {}, 2],
  [function (...args) {}, 0],
  [function (a = 0, b, c) {}, 0], // 默认参数非尾参时，其后参数均不计数
  [function (a, b = 1, c) {}, 1],
];

for (const [fn, expected] of cases) {
  console.log(fn.length, '===', expected, '?', fn.length === expected);
}
