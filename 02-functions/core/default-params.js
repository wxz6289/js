/*
function log(x,y) {
	y = y || "World";
	console.log(x, y);
}

log("Hello", "World");
log("Hello");
log("Hello", ""); // 这时被不符合预期

*/

/*
function log(x,y) {
	if(typeof y === 'undefined') {
		y = "World";
	}
	console.log(x, y);
}

log("Hello", "World");
log("Hello");
log("Hello", ""); // 这时被不符合预期
log("hello", 0);
log("hello", undefined);

*/

/*
function log(x,y = "World") {
	console.log(x, y);
}

log("Hello", "World");
log("Hello");
log("Hello", ""); // 这时被不符合预期
log("hello", 0);
log("hello", undefined);

*/

/*function Point(x = 0, y = 0) {
	this.x = x;
	this.y = y;
}

const p = new Point();
console.log(p);
const p1 = new Point(1);
console.log(p1);
const p2 = new Point(1,2,3);
console.log(p2)
*/

/* 
//没有默认参数时,函数参数可以同名，同名参数最终取最后一个值
function foo(x,x,y) {
	console.log(x, x, y);
}

foo(1,2,3);
*/

/*
//有默认参数时,函数参数同名会报错
function foo(x,x,y =1) {
	console.log(x, x, y);
}

foo(1,2,3);
*/

/*
// 参数默认值是惰性求值的，也就是每次执行函数时重新计算默认参数表达式的值
let x = 99;
function foo(p = x + 1) {
	console.log(p);
} 

foo();
foo();

x = 100;
foo();
*/

/*
function foo({x, y = 5}) {
	console.log(x, y);
}

foo({});
foo({x: 1});
foo({x:1, y:3})
foo(); // 因为函数参数是一个对象,如果不传参则默认值为undefined,而undefined是不能解构的。
*/

/*
// 这种双重默认值写法值得推荐
function foo({x, y = 5} = {}) {
	console.log(x, y);
}

foo({});
foo({x: 1});
foo({x:1, y:3})
foo(); 
*/

/* 
//默认空对象会对具体设置了默认属性的对象进行解构赋值
function m1({x = 0, y = 0} = {}) {
	return [x,y];
}

console.log(m1());
console.log(m1({x:2}));
console.log(m1({y:2}));
console.log(m1({x:2, y:3}));

 */

/* // 设置了具体的属性对象,不单独对具体默认的属性进行解构赋值
function m2({x , y } = {x:0, y:0}) {
	return [x,y];
}

console.log(m2());
console.log(m2({x:2}));
console.log(m2({y:2}));
console.log(m2({x:2, y:3})); */

/* 

// 默认参数一般是尾参数, 非尾参数设置默认值无效，调用时不传参就会报错
function f(x =1, y) {
	return [x, y];
}

console.log(f());
console.log(f(2));
// f(, 2);
console.log(f(undefined,1));

 */

/* 
//let x = 1;

function f(y = x) {
  let x = 2;
  console.log(y);
}

f();

f(3);
 */

/* 
//  let foo = 'outer';
 function bar(func = () => foo){
	 let foo = "inner";
	 console.log(func());
 }

 bar();

 */
/* 
 var x = 1;
 function foo(x, y = function(){ x = 2;}){
	 var x = 3;
	 y();
	 console.log(x);
 }

 foo();

 foo(5)
 */

/* 
function throwMissing() {
  throw new Error("Missing parameter");
}

function foo(mustBeProvided = throwMissing()) {
  return mustBeProvided;
}

foo();
 */
/* 
 function add(...values){
	 let sum = 0;
	 for (const val of values) {
		 sum += val;
	 }
	 return sum;
 }

 let r = add(2, 5, 3);
 console.log(r); 
 */
/* 
function sortNumber() {
  return Array.prototype.slice.call(arguments).sort();
}

function sortNumber2(...numbers) {
  return numbers.sort();
}

let n = [2, 1, 3, 2, 5];
console.log(sortNumber(...n));
console.log(sortNumber2(...n));
let s = sortNumber2;
console.log(s.name);

console.log(new Function("a", "b", "return a + b;").name);

let s1 = sortNumber.bind(null,...n);
console.log(s1.name);
console.log(s1());

let sum = (n1, n2) => n1 + n2;
console.log(sum.name);

let returnObject = (m, n) => ({m, n});

console.log(returnObject(2, 3));

let foo = () => { a: 1}; // 语句块，标签语句

console.log(foo());

 */

/*  function foo(){
	setTimeout(() => {
		console.log("id: ", this.id);
		console.log(this, arguments);
	}, 100);
 }

 var id = 21;
 foo.call({ id: 42 }); */


/*  
1. 函数参数默认值 函数默认参数是惰性求值的 默认参数与解构赋值结合使用
函数属性：
1. length 函数必传参数个数，不包括可选参数(默认参数、尾参数)
2. name 函数名

箭头函数注意点：
1. 函数体内this指向定义时所在的对象，而不是使用时所在的对象。
2. 不可以当作构造函数，也就是说不可以使用new命令
3. 不可以使用arguments对象
4. 不可以使用yield命令，因此不能作为generator函数

不适合使用this的场景
1. 定义对象的方法，并且方法内部包含this;
2. 需要使用动态this;
3. 函数体复杂
*/
/* 
function bar(val){
	return y + val;
}

function foo(x = y + 3, z = bar(x)){
	console.log(x, z);	
}


var y = 2;
foo(undefined, 10);
foo(10); */
/* 
var w = 1, z = 2;
function foo(x = w + 1, y = x + 1, z = z + 1){
	console.log(x, y, z);	
}

foo(); */

let Person = function () {};
Person.prototype.set = function(age){
	this.age = age;
	return this;
};
Person.prototype.get = function(){
	return this.age;
}

let p = new Person()
let a = p.set(12).get();
console.log(a);

function wordsChain(word) {
	let words = word;
	function chain(word) {
		words += '->' + word;
		return chain;
	}
	chain.valueOf = function(){
		return words;
	}
	return chain;
}

let ws = wordsChain('胸有成竹')('竹报平安')('安富尊荣').valueOf();
console.log(ws);




