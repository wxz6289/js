var o = { a: 1};
// o ---> Object.prototype ---> null
console.log(o.hasOwnProperty("a"));

var a = ["How", "are", "U"];
// a ---> Array.prototype ---> Object.prototype ---> null
console.log(a.indexOf("U"));

function f() {
	return 5;
}

// f ---> Function.prototype ---> Object.prototype ---> null
console.log(f.call(a));