let o = { x: 1, y: 2, z: 3 };
let keys = '';
let i = 0, j = 0;
for (let k of (i++, Object.keys(o))) {
  keys += k;
}
console.log(keys);
console.log(i);