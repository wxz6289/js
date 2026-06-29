// 简易 call 实现 + 方法追踪装饰器

function myCall(o, fn, ...args) {
  if (o === null || typeof o !== 'object') {
    o = Object.create(null);
  }
  const tempMethod = Symbol('m');
  o[tempMethod] = fn;
  const result = o[tempMethod](...args);
  delete o[tempMethod];
  return result;
}

function hello(age) {
  console.log(this.name, age);
}

myCall({ name: 'king' }, hello, 23);

// --- 方法追踪（装饰器思路）---
function trace(o, methodName) {
  const original = o[methodName];
  o[methodName] = function (...args) {
    console.log('Enter:', methodName);
    const result = original.apply(this, args);
    console.log('Exit:', methodName);
    return result;
  };
}

const test = {
  name: 'test',
  hello() {
    return this.name;
  },
};

trace(test, 'hello');
console.log(test.hello());
