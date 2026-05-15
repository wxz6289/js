function Graph() {
	this.vertices = [];
	this.edges = [];
}

Graph.prototype = {
	addVertex: function(v) {
		this.vertices.push(v);
	}
};

var g = new Graph();

console.log(g.__proto__ === Graph.prototype);
console.log(g.hasOwnProperty("edges"));
console.log(g.hasOwnProperty("nope"));
console.log(g.hasOwnProperty("addVertex"));
console.log(g.__proto__.hasOwnProperty("addVertex"));

// hasOwnProperty()是js中唯一处理属性并且不会遍历原型链的方法
// 检查属性是否undefined还不够。该属性可能存在，但其值恰好为undefined。


