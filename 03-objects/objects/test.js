let  obj = { a: { b: "2"}};

function fn1(obj) {
    obj.a.b = 3;
}

function fn2(obj) {
    let {a} = obj; // 解构是赋值的简写形式
    console.log(a.b, "test");
    a.b = 5;
}

function fn3(obj) {
    let { a:{ b}} = obj;
    console.log(b, "test");
    b = 6;
    console.log(obj.a.b, b);
}

console.log(obj.a.b);
// fn1(obj);
// console.log(obj.a.b);
// fn2(obj);
// console.log(obj.a.b);
fn3(obj);
console.log(obj.a.b);


