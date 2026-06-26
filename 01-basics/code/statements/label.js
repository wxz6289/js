// 标签语句标记表达式，本身不产生跳转

let a = 2;
if (a === 2) {
  a: console.log(a);       // 2
  b: c: console.log(a + 1); // 3
}
c: console.log(a); // 2
