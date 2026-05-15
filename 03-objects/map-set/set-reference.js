let s = new Set();
let key = {name: "King"};
let keyback = key;
s.add(key);
console.log(s.size);
key = null;
console.log(s.size);
console.log([...s][0] === keyback);

