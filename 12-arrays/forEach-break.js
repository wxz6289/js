const arr = [1, 2, 3, 4, 5];
arr.forEach((n) => {
  if (n > 3) {
    console.log(n);
    break;
  }
  console.log("n:", n)
})

for (const v of arr) {
  console.log(v);
  if (v > 3) break;
}