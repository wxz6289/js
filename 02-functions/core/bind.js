// bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
var person = {
	name: "Dreamer",
	showName: function() {
		console.log(this.name);
	}
};

var ushowName = person.showName; //取函数方法

ushowName(); // undefined 因为这时this指向全局对象，在全局对象上找不到对应的属性
var bshowName = ushowName.bind(person); //这里返回的是一个函数
bshowName();
console.log(bshowName.toString());

// fun.bind(thisArg[, arg1[, arg2[, ...]]])
// 1. thisArg 当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用new 操作符调用绑定函数时，该参数无效。
// 2. arg[n] 当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。
// bind() 函数会创建一个新函数（称为绑定函数），新函数与被调函数（绑定函数的目标函数）具有相同的函数体（在 ECMAScript 5 规范中内置的call属性）。当新函数被调用时 this 值绑定到 bind() 的第一个参数，该参数不能被重写。绑定函数被调用时，bind() 也接受预设的参数提供给原函数。一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

// 偏函数
// bind()的另一个最简单的用法是使一个函数拥有预设的初始参数。这些参数（如果有的话）作为bind()的第二个参数跟在this（或其他对象）后面，之后它们会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们的后面。

function list() {
	return Array.prototype.slice.call(arguments);
}

var list1 = list(1,2,3);
console.log(list1);

var blist = list.bind(undefined, 37);
var blist1 = blist();
console.log(blist1);
var blist2 = blist(1,2,3);
console.log(blist2);


// 模拟实现bind函数
Function.prototype.bind = Function.prototype.bind || function(ctx) {
	var me = this;
	var args = Array.prototype.slice.call(arguments, 1);
	return function() {
		var inArgs = Array.prototype.slice.call(arguments);
		var allArgs = args.concat(inArgs)
		return me.apply(ctx, allArgs);
	}
}


// 构造函数场景的兼容
Function.prototype.bind = Function.prototype.bind || function(ctx) {
	if(typeof this !== 'function') {
		throw TypeError('Function.prototype.bind is tring to be bound is not callable');
	}

	var fToBind = this;
	var args = Array.prototype.slice.call(arguments, 1);
	var fNOP = function() {};

	var fBound =  function() {
		var inArgs = Array.prototype.slice.call(arguments);
		var allArgs = args.concat(inArgs);
		var innerBind = this instanceof fNOP? this: ctx; 
		return fToBind.apply(innerBind, allArgs);
	};

	if(this.prototype) {
		fNOP.prototype = this.prototype;
	}

	fbound.prototype = new fNOP();
	return fBound;
}