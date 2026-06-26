// eval 中 if 语句无返回值；给原始类型赋属性会被忽略

var a, b;
a = eval(`if(true) {
    b = 4 + 12;
}`);

console.log(a, b);

var name = "King";
name.age = 23;
console.log(name);


