/* 
ES7 新增运算符
1. 赋予js以顺序的手法编写异步操作的能力
2. 既保留异步运算的无阻塞特性，还继续使用同步写法
3. 还能正常使用return/try/catch
4. async/await仍然需要Promise 
*/

function resolve1s(x) {
  return new Promise( resolve => {
    setTimeout(() => {
      console.log(x, "in resolve1000s(x)");
      resolve(x);
    }, 1000)
  })
}

async  function executor() {
  let x = await resolve1s(120);
  console.log(x, "in executor()");
  return 2*x;
}

executor().then(y => {
  console.log(y);
});
