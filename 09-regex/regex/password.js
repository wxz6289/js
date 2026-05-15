/*
密码规则： 
1. 密码长度在6~12个字符之间 
2. 只能由小写字母、数字、横线组成
3. 开头和结尾不能是横线
4. 不能全是数字
5. 不允许有连续的横线

匹配 01, 0011, 000111, ... 这类字符串
*/

function validate(str) {
    let pattern = /^(0+)(1+)$/;
    let result =  str.match(pattern);
   return result && result[1]  && result[2] && result[1].length === result[2].length;
}

console.log(validate('0011'));


function isLeapYear(str){
    let pattern = /\d{2}([02468][048]|[13579][26])/;
   return  str &&  str.search(pattern) >= 0 && Number.parseInt(str) % 400 === 0;
}

console.log(isLeapYear('1900'));
console.log(isLeapYear('2400'));

