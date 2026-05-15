// Promise.race() 与Promise.all() l类似， 区别在于它的任意一个完成就算完成
//  常见用法 把异步跟定时器放在一起，如果定时器先触发，就认为超时，告知用户
console.log("start");
let p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("I'm P1");
  }, 1000);
});

let p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("I'm P2");
  }, 500);
});

Promise.race([p1, p2])
.then(value => {
  console.log(value);
});
