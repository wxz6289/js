// 函数注册表：为函数分配 id 并缓存引用

const Store = {
  nextId: 1,
  cache: {},
  add(fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
    return false;
  },
};

function ninja() {}
function samurai() {}

console.log(Store.add(ninja));   // true
console.log(Store.add(samurai)); // true
console.log(Store.add(ninja));   // false — 已注册
console.log(Object.keys(Store.cache)); // ['1', '2']
