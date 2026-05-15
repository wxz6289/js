let a = [1];
a[3] = 3;
a[7] = 8;

for (let i of a) {
  console.log(i);
}

a.forEach((item) => {
  console.log(item, 'each');
})

console.log(a.map((b) => b + '2'));
console.log(a.filter((b) => b % 2 == 0));
