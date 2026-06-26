/* console.log(a);
function a() {
    
}
var a = 1; */

/* var  a = 12;
function b() {
    return 23;
}

function b() { // 同名函数后面声明的函数会覆盖前面的函数
    return 100;
}

{
    var a = 23; // 后声明的变量会覆盖之前声明的变量
}
console.log(a, b()); */



/* function b() {
    return 90;
}
var b;  // 变量先被预处理
console.log(b); */


/* function show() {
	var a = "Hello";
	
}
show();
console.log(a); */



// var a;

// 声明变量
// 变量初始化  变量初始化语句可以写在变量声明之前，这是因为变量声明通常是在代码执行之前完成,也就是所谓的变量提升。
// 更新变量

// 之前的js只提供函数作用域和全局作用域来控制变量的作用域和生命周期。
/* if (true) {
    var x = "hello";
    // let x = "hello";
}
console.log(x); */


/* // 百度面试
var a = { n: 1};
var b = a;
a.x = a = { n: 2 };
debugger;
console.log(a.n, b.n);
console.log(a.x, b.x); // why? 优先级
 */


// 函数作用域
/* var x = 10;
function fn(){
    console.log(x);
}

function show(fn){
    var x = 20;
    fn();
}

show(fn); */

/* var fn = function () {
    console.log(fn);
}

fn();

var obj = {
    fn2: function () {
        console.log(this.fn2);
    }
}

obj.fn2(); */


/* var a = 2;
function fn(){
    console.log(a);
    var a = 3;
} 

fn(); */

var c = 1;
function c(c){
    console.log(c);
    var c = 3;
}

c(2);

/* 
预处理：
1. 收集用var声明的变量
2. 收集用function声明的函数
*/