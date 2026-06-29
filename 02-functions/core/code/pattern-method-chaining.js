// 链式调用：返回自身并定义 valueOf

function wordsChain(word) {
  let words = word;
  function chain(w) {
    words += '->' + w;
    return chain;
  }
  chain.valueOf = function () {
    return words;
  };
  chain.toString = chain.valueOf;
  return chain;
}

const ws = wordsChain('胸有成竹')('竹报平安')('安富尊荣');
console.log(String(ws)); // 胸有成竹->竹报平安->安富尊荣

// 原型链式 API（jquery 风格）
function Person() {}
Person.prototype.set = function (age) {
  this.age = age;
  return this;
};
Person.prototype.get = function () {
  return this.age;
};

console.log(new Person().set(12).get()); // 12
