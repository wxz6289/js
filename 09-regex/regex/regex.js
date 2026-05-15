/*
// 第一个参数是字符串， 第二个参数是正则修饰符
var regex = new RegExp("xyz", "i");
console.log(regex);
// 直接传一个正则表达式, ES5不允许再使用第二个正则修饰符,但是ES6可以，并且会覆盖第一个参数自带的修饰符
var regex2 = new RegExp(/xyz/i, "ig");
console.log(regex2);
console.log(/xyz/i == regex2);
console.log(regex2.flags);
*/


/*
const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
const matchObj = RE_DATE.exec("2001-12-09");
const year = matchObj[1],  month = matchObj[2], day = matchObj[3];
console.log(year, month, day);
*/

// const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// const matchObj = RE_DATE.exec("2001-12-09");
// const { year, month, day } = matchObj.groups;
// console.log(year, month, day);

console.log(0b1101 === 13);
console.log(0O11 === 9);