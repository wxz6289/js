// 链式闭包：每次调用 fun 都会把当前的 n 闭包进返回对象的方法里

function fun(n, o) {
  console.log(o);
  return {
    fun(m) {
      return fun(m, n);
    },
  };
}

const a = fun(0); // undefined
a.fun(1); // 0  — o 为创建 a 时闭包的 n（0）
a.fun(2); // 0
a.fun(3); // 0

const b = fun(0).fun(1).fun(2).fun(3); // undefined → 0 → 1 → 2
b.fun(4); // 3
b.fun(5); // 3
