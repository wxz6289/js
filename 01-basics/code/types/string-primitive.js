// 原始类型字符串不可扩展属性

let str = 'Hello';
str.test = 5;
console.log(str.test); // undefined
