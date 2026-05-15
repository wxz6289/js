// 避免原型对象的影响，所以将原型对象置为`null`
let map = Object.create(null);
map[5] = "test";
// 非字符串的类型键名会被转换为字符串类型的键名
console.log(map[5],map['5']);

let k1 = {};
let k2 = {name: "king"};
map[k1] = "foo";
// 这里k1与k2是两个不同对象，但是作为对象的键名时，使用了被转换为字符串的键名`"[object Object]"`。
console.log(map[k2]);

map.count = 0;

if(!map.count){
    console.log(`count属性不存在或值为0`);
}
// 判断属性是否在对象或其原型对象是否村砸
if('count' in map){
    console.log("count属性存在");
}

