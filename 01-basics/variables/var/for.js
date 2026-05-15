/*let a = 12; 

function a() {
    return 20;
}
console.log(a);

// {
//     var a = 23; 
// }
// console.log(a);
// console.log(a, a());

function a() {
    return 22; 
}

console.log(a());
*/
/*

for(let i = 0; i < 10; i++) {
	// console.log(i);
}

console.log(i); // i 未定义

*/

/*var a = [];

for(let i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}

a[2]();
*/
/*var a = 1;
function func() {
	let a = 10;
	//var a = 20; // 不允许在相同作用域内重复声明
	return a;
}

// 可以声明同名函数，但是最后声明的函数覆盖了之前的同名函数
function func() {
	return a;
}

console.log(func());*/


/*
function fun(arg) {
	var arg = 23; // 使用var声明与参数同名的变量参数会声明的变量覆盖
	return arg;
}
*/
/*
function fun(arg) {
	let arg = 23; // 使用let声明与参数同名的变量会报错
	return arg;
}
*/


// var tmp = new Date();

/*function fun(isOk) {
	console.log(tmp);
	if(isOk) {
		var tmp = "Hello!"; // 注意此处变量有声明提升
	}
	console.log(tmp,"test");
	//return tmp;
}
fun(1);
*/
// console.log(fun(1));

/*
var s = "hello";
for(var i = 0; i < s.length; i++) {
	console.log(s[i]);
}
console.log(i); // 此处的i泄露了
*/

// ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。但是为了兼容还是可以的
/*
if(true) {
	function fun() {
		console.log("hahhaha");
	}
}
fun();

*/

/*
try {
	function fun() {
		console.log("try try");
		throw new Error("hahah");
	}
	fun();
} catch(e) {
	console.log(e);
}
*/

// ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
/*
function fun1() {
	console.log("outter");
}

(function() {
	if(false) { // 在立即执行函数中没有函数提升
		function fun1() {
			console.log("inner");
		}
	}
	fun1();
}());

fun1();*/

// 在立即执行函数中没有变量提升
/*(function () {
	console.log("before", tmp);
	if(false) {
		var tmp = "I'm here";
	}
	console.log("after", tmp);
}());*/

// var a = "hahhaha";
// {
// 	let a = "sercret";
// 	/*function f() { //这个函数具有访问局部变量的功能
// 		return a;
// 	}*/
// 	// let f = () => a; // 这时是局部的

// 	// console.log(f());
// 	var f = function() {
// 		return a;
// 	}

// }
// console.log(f());

// const声明的变量不能保证其值不改变,对于引用类型只是不允许改变内存地址
// 如果想冻结引用类型的改变，应该使用Object.freeze()方法

/*const foo = {};
foo.prop = 233;
console.log(foo);
delete foo.prop;
console.log(foo);
// foo = {}; // 重新赋值会报错
*/

/*const foo = Object.freeze({});
foo.prop = "freeze"; // 已冻结的对象不能改变
console.log(foo);*/

/*let foo = { name: "King"};
Object.freeze(foo);
console.log(foo);
foo.age = 20;
console.log(foo);*/
/*
let foo = { mame: "king"};
let outter = { name: "Dreamer", person: foo};
Object.freeze(outter);
console.log(outter);
foo.age = 20;
console.log(outter);
delete outter.person;
console.log(outter);
delete outter.person.age; // 未被冻结的属性可以改变
console.log(outter);
delete outter.person.name; //被冻结的属性是改不了的
console.log(outter);
delete foo.age;
console.log(outter);
*/

// ES5只有var和function两种变量声明方法
// ES6还新增了let const import class 4种方法

/*var a = 1;
window.a;
let b = 2;
window.b; // let 声明的全局变量与顶级对象脱离的
*/

// 获取全局变量
// 写法一:
/*var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

console.log(getGlobal());*/

// 写法2：
/*var global2 = (typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);
console.log(global2);*/