/*let [a,b,c] = [1,2,3,4];
console.log(a,b,c);*/

/*
let [a,[b,c]] = [1,[2,3],4];
console.log(a,b,c);
*/


/*let [,[,c]] = [1,[2,3],4];
console.log(c);*/

/*let [,[,...c]] = [1,[2,3,4]];
console.log(c);*/

/*let [x,y, ...z] = [1];
console.log(x,y,z);*/

/*let [a] = 1; // 如果右边不可遍历则报错
console.log(a);*/

/*
let [x,y,z] = new Set(['a','c','s']);
console.log(x,y,z);*/

/*
function* fibs() {
	let a = 0;
	let b = 1;
	while(true) {
		yield a;
		[a, b] = [b, a + b];
	}
}

let [a, b, c, d, e, f, g, h,i] = fibs();
console.log(a, b, c, d, e, f, g, h, i);

*/

/*let [foo = true, zoo] = [, 34]; // 默认值
console.log(foo, zoo);
*/

/*
let [x=1,y=2] = [undefined, null]; // 只有严格等于undefined才会赋予默认值
console.log(x, y);
*/


/*
function f() {
	console.log("aaaa");
}

//let [x = f()] = [0, 3]; // 因为x能够取到默认值，所以f()不会执行
let [x = f()] = [];
*/

/*
let [x = 1, y = x] = [2]; // 变量解构可以引用已声明的变量
console.log(x,y);
*/

/*
let [x = y, y = 2] = []; // 这时候会报错
console.log(x,y);
*/
/* //引用类型的解构会影响到原始变量
let a = [[1,2],[3,4]];
let [b,c] = a;
console.log(b,c);
a[1][0] = 30;
console.log(b,c);
b[0] = 10;
console.log(a);
console.log(b,c);
*/

/*
let { foo, bar, baz } = { foo: "foo", bar: "bar"};
console.log(foo, bar, baz);
*/

// 变量与属性名不一致的解构
/*
let { foo:baz } = { foo: "aaa", bar: "bar"}; // foo:baz的意思是将foo属性映射到变量baz上
console.log(baz);
// console.log(foo); //这时把属性当变量访问了，会报错
*/

/*
let obj = {
	p: [
		"Hello",
		{y: "world"}
	]
};

let { p:[x, { y: y}]} = obj;
console.log(x,y);

let { p: a, p:[,b]} = obj; 
console.log(a,b);
*/
/*
const node = {
	loc: {
		start: {
			line: 1,
			column: 5
		}
	}
};

let { loc, loc: { start }, loc: loc2, loc: {start: { line }} } = node;

console.log(loc, loc2, start, line);
*/

/*
let x;
// {x} = {x:2}; //这样以{开始会报错
({x} = {x:2});
console.log(x);
*/

/*
let [a,b,c,d,e,f] = "hello";

console.log(a,b,c,d,e,f);
*/
/*
function move({x = 0, y =0} = {}) {
	return [x, y];
}

console.log(move({x:3,y:4}));
console.log(move({x:3}));
console.log(move({}));
console.log(move());

*/


/*function move({x, y} = {x:0, y:0}) {
	return [x, y];
}

console.log(move({x:3,y:4}));
console.log(move({x:3}));
console.log(move({}));
console.log(move()); //只有这样的情况才会使用默认值
*/

/*
let x = [[1,2],[3,4]].map(([a,b]) => a + b);
console.log(x);
*/


/*
let x = [1, undefined, 3].map((x = "yes") => x);
console.log(x);
*/

// 不能使用圆括号的情形
//1. 变量声明语句
// let [(a)] = [2];
// let ([a]) = [2];
// let {(x):y} = {x:2};

//2. 函数参数
/*
function f([(x)]) {
	return x;
}
*/

//3. 赋值语句模式
// ({p:a}) = {p: 42};

// 可以使用圆括号的情况
/*
let b;
[(b)] = [3];
console.log(b);

let d;
({p: (d)} = {p: 3});
console.log(d);

[(parseInt.prop)] = [3];
console.log(parseInt.prop);
*/

// 用途
//1.  交换变量的值
/*
let x = 1, y = 2;
[x,y] = [y, x];
console.log(x, y);
*/

//2. 获取函数返回的多个值

/*function fun() {
	return [1, 2, 3];
}

function fun2() {
	return { foo: "foo", bar: "bar"};
}

let [a, b, c] = fun();
let { foo, bar } = fun2();
console.log(a,b,c);
console.log(foo, bar);
*/

// 3. 函数参数的定义 方便参数对应
/*
function f([x, y, z]){
	console.log(x, y, z);
}

f([1,2,3]);

function f2({x,y,z}) {
	console.log(x,y,z);
}

f2({x:10, y: 20, z: 30});
*/

//4. 提取JSON数据
/*
let jsonData = {
	id: 42,
	status: "Ok",
	data: [23, 56]
};

let { id, status, data: number} = jsonData;
console.log(id, status, number);
*/

// 5. 函数参数默认值
/*
function fun({x = 2, y =4 } = {x:3, y:5}) {
	console.log(x, y);
}

fun();
fun({x:10});
fun({x: 20, y: 40});
fun({});
*/

// 6. 遍历Map结构

/*
const map = new Map();
map.set("first", "hello");
map.set("second", "world");

for(let [key, value] of map) {
	console.log(key, value);
}
*/

// 7. 模块导入
// const React, { Component } = require("react");