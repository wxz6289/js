// 自定义可迭代对象（Symbol.iterator）

const fib = {
  [Symbol.iterator]() {
    let a = 1;
    let b = 0;
    return {
      next() {
        const current = a;
        [a, b] = [a + b, a];
        return { value: current, done: false };
      },
    };
  },
};

for (const f of fib) {
  if (f > 100) break;
  console.log(f);
}
