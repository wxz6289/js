const p1 = new Promise((resolve) => {
  resolve('A');
});

// 异步展开
const p2 = new Promise((resolve) => resolve(p1));

p2.then((v) => {
  console.log("p2:",v);
});

const p3 = new Promise((resolve) => resolve('B'));

p3.then((v) => {
  console.log("p3:", v);
});