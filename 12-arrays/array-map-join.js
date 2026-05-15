let a = new Array(3);
let b = Array.apply(null, { length: 3 });
console.log("a: ", a);
console.log("b: ", b);

console.log("a.join(): ", a.join("-")); // join方法会假定数组不为空，通过length属性来遍历数组，而map方法没有做这样的假定。
console.log("b.join(): ", b.join('-'));


console.log("a.map(): ", a.map((v, i) => i )); // 数组中不存在任何可执行的单元，map方法无法执行
console.log("b.map(): ", b.map((v, i) => i ));
