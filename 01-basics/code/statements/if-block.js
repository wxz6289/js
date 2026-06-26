// 无花括号时 else 归属最近的 if；加 { } 可消除歧义

let n = 10;
if (n > 1) {
  console.log(n, '> 1');
} else if (n > 2) {
  console.log(n, '> 2');
} else {
  console.log('other');
}
