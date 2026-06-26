/*const a = "\u0061";
console.log(a);
const b = "\uD842\uDFB7";
console.log(b);*/

/*const c = "\u{41}\u{42}\u{43}";
console.log(c); 
let hello = 123;
console.log(hell\u{6F});
console.log("\u{1F680}" === "\uD83D\uDE80");*/

/*
console.log('\z' === 'z');
console.log('\172' === 'z');
console.log('\x7a' === 'z');
console.log('\u007a' === 'z');
console.log('\u{7A}' === 'z');

*/

/*
var s = "𠮷a";
console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));
console.log(s.codePointAt(0));
console.log(s.codePointAt(1));
console.log(s.codePointAt(2));
*/

let s = "Hello world!";
console.log(s.endsWith("Hello", 5));  // endsWith(xx, n) 第二个参数的含义是指前n个字符
console.log(s.endsWith("Hello", 6));
console.log(s.startsWith("world",6)); // startsWith(xx, n) 第二个参数的含义指从第n个字符开始往后
