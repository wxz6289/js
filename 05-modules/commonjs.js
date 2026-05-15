var counter = 3;
function incrCounter() {
	counter++;
	console.log(counter, "in module");
}

module.exports = {
	/*get counter(){
		return counter;
	},*/
	counter, // 这种写法导出后不会被改变
	incrCounter
};

/*
ES6与Commonjs的差异
1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
*/