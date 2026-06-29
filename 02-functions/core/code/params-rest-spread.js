// 剩余参数 ...args 与 arguments 对象

function checkArgs(a, ...args) {
  console.log('args.length:', args.length, 'arguments.length:', arguments.length);
  console.log('args:', args);
  args[0] = 'A';
  console.log('修改 args 后 arguments:', [...arguments]);
}

checkArgs(12, 10);

function add(...values) {
  return values.reduce((sum, v) => sum + v, 0);
}
console.log('add:', add(2, 5, 3));

function sortWithSpread(...numbers) {
  return numbers.sort((a, b) => a - b);
}
const n = [2, 1, 3, 2, 5];
console.log('spread:', sortWithSpread(...n));
