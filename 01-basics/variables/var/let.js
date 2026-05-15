

{
    let a = 10;
    const b = 8;
    var c = 20; // var 声明的变量没有块作用域，会有变量提升
    // b = 12;  // const 声明的变量再次赋值会报错
    console.log(a,b, "innner");
}
console.log(c);
// console.log(a, b, "outter");  // let const 声明的变量支持块作用域，块外不能访问
//let a = 23; // let 声明的变量不可被后面的同名变量或函数覆盖
function a() {
    return 30;
}
// var a = 20;
console.log(a); 


for (let index = 0; index < 10; index++) {}
//console.log(index);

var a = [];
for (let j = 0; j < 10; j++) {
  let j = "king";
  a[j] = function() {
    console.log(j);
  };
}
//使用var声明的是全局的，其声明的变量是共用的，
//而let声明的变量只局部的，仅在本轮循环里有效，
// 另外循环变量的那部分作用域与循环体的作用域是独立的，其循环的值是因为js引擎会记录上一次循环的值

a["king"]();


console.log(typeof x);


// let x =12;

function bar(x = y, y = 2){
    return [x, y];
}

// bar();
function bar2(x = 2, y = x){
    return [x, y];
}

bar2();

var z = z;
console.log(z, "k");
// let z1 = z1;
// console.log(z1);

if(true){
    function f(params) {
        console.log("hhaha");
    }
}

try {
    function f2(params) {
        console.log("hhaha2");
        
    }
} catch (error) {
    
}

f();
f2();

/* function b(params) {
    console.log("out");
}

(function(){
    if(false){
        function b(params) {
            console.log("inside");
        }
    }
    b();
}());
 */
