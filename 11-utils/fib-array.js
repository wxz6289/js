function fibs(n) {
  let a = 1, b = 1, c = 0;
  for (let i = 2; i < n; i++) {
    c = a + b;
    [a, b] = [c, a];
  }
  return c;
}

console.log(fibs(10))