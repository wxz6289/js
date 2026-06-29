// 类型检测：Object.prototype.toString 与 Symbol.toStringTag

function getType(x) {
  return Object.prototype.toString.call(x).slice(8, -1);
}

console.log(getType(12)); // Number
console.log(getType(null)); // Null
console.log(getType(false)); // Boolean
console.log(getType([])); // Array
console.log(getType({})); // Object
console.log(getType(Symbol('test'))); // Symbol

const user = { [Symbol.toStringTag]: 'User' };
console.log({}.toString.call(user)); // [object User]

class User {
  [Symbol.toStringTag] = 'User';
}
console.log(getType(new User())); // User

function checkType(type) {
  return (v) => getType(v).toLowerCase() === type;
}
console.log(checkType('object')({})); // true

// | 方式 | 适用 |
// | typeof | 基本类型 |
// | {}.toString / getType | 内置对象、带 toStringTag 的对象 |
// | instanceof | 任意对象（看原型链） |
