// endsWith(str, n) — 在前 n 个字符中查找
// startsWith(str, pos) — 从第 pos 个字符起查找

let s = 'Hello world!';
console.log(s.endsWith('Hello', 5));  // true
console.log(s.endsWith('Hello', 6));  // false
console.log(s.startsWith('world', 6)); // true
