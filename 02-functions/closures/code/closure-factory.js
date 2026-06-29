// 闭包工厂：根据参数生成携带「私有状态」的函数

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(2)(5)); // 7

function isBetween(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  return function (value) {
    return value >= min && value <= max;
  };
}

function inArray(arr) {
  return function (value) {
    return arr.includes(value);
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(isBetween(3, 6))); // [3, 4, 5, 6]
console.log(arr.filter(inArray([1, 2, 10]))); // [1, 2]

function byField(prop) {
  return function (a, b) {
    return a[prop] > b[prop] ? 1 : -1;
  };
}

const users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

users.sort(byField('age'));
console.log(users.map((u) => u.name)); // Pete, Ann, John

users.sort(byField('name'));
console.log(users.map((u) => u.name)); // Ann, John, Pete
