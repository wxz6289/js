// 函数记忆化：在函数上挂缓存属性

function isPrime(value) {
  if (!isPrime.cache) isPrime.cache = {};
  if (isPrime.cache[value] !== undefined) {
    return isPrime.cache[value];
  }
  let prime = value !== 0 && value !== 1;
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  console.log('compute', value, '...');
  return (isPrime.cache[value] = prime);
}

console.log(isPrime(5));
console.log(isPrime(5)); // 命中缓存
console.log(isPrime(6));

// 缓存 DOM 查询（浏览器环境；Node 中仅作定义示例）
// function getElementByIdCached(name) {
//   if (!getElementByIdCached.cache) getElementByIdCached.cache = {};
//   return getElementByIdCached.cache[name] || document.getElementById(name);
// }

// 优点：透明复用计算结果；缺点：占内存、与业务逻辑耦合、难测性能
