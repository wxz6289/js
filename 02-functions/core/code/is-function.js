// 可靠判断是否为函数

function isFunction(fn) {
  // typeof fn === 'function' 对某些 DOM 对象会误判
  return fn != null && Object.prototype.toString.call(fn) === '[object Function]';
}

console.log(isFunction(() => {}));     // true
console.log(isFunction({}));           // false
console.log(isFunction(null));         // false
console.log(isFunction(function () {})); // true
