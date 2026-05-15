let s1 = Symbol("This is a Symbol");
    s2 = Symbol("This is a Symbol");

console.log(s1); // Symbol(This is a Symbol)
console.log(s1.toString()); // Symbol(This is a Symbol)

console.log(typeof s1); // symbol
console.log(s1 == s2); // false

let obj = { 
    // 这里使用了计算属性名的形式,不然默认是字符串类型属性名
    [s1]: "This is a property of symbol type"
}

console.log(obj[s1]); // This is a property of symbol type
// 与原生字符串不是String的实例一样, symbol也不是Symbol的实例
console.log(s1 instanceof Symbol); // false
// Symbol的装箱封装对象形式
let s1obj = Object(s1);
console.log(s1obj instanceof Symbol); // true
console.log(s1obj.valueOf() === s1); // true

try {
    // 报类型错误
    let s3 = new Symbol("boom");  
} catch (error) {
    console.error(error.message); // Symbol is not a constructor
}





