// Promise.resolve() 返回一个fulfilled的Promise实例，或原始的Promise实例。
// 如果参数为空，返回一个状态为fullfilled的Promise实例
//如果参数是一个Promise无关的值，同上，不过fullfilled响应函数会得到这个参数
//如果参数是Promise实例，则返回这个实例，不做任何修改
// 如果参数是thenable，则立即执行它的.then()

console.log("start")
Promise.resolve()
  .then(() => {
    console.log("step 1");
    return Promise.resolve("hello");
  })
  .then( value => {
    console.log(value, "world");
    return Promise.resolve(new Promise( resolve => {
      setTimeout(() => {
        resolve("Goood");
      }, 2000);
    }));
  })
  .then(value => {
    console.log(value, "evening");
    return Promise.resolve({
      then() {
        console.log('everyone');
      }
    })
  })
  .catch(err => {
    console.error(err);
  })
