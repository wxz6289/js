function sieve(n) {
  let a = new Uint8Array(n + 1);
  let max = Math.floor(Math.sqrt(n)); // 需要分解的最大数
  let p = 2;
  while (p <= max) {
    for (let i = 2 * p; i <= n; i += p) { // 将p的倍数标记为合数
      a[i] = 1; // 合数标记为1
    }
    while (a[++p]);/* 空循环 */ // 下一未标记的索引是素数
  }
  while (a[n]) n--; // 查找最后一个素数
  return n
}

console.log(sieve(10));