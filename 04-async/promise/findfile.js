const fs = require('fs');
const path = require('path');

function findLargest(dir, callback) {
	fs.readdir(dir, function(err, files) {
		if(err){
			return callback(err);
		}
		let count = files.length;
		let errored = false;
		let stats = [];
		files.forEach(file => {
			fs.stat(path.join(dir, file),(err, stat) => {
				if(errored) return;
				if(err){
					errored = true;
					return callback(err);
				}
				stats.push(stat);

				if(--count ===0){
					let largest = stats
						.filter(function(stat) { return stat.isFile();})
						.reduce(function(prev, next) {
							if(prev.size > next.size) {
								return prev;
							}
							return next;
						});
				callback(null, files[stats.indexOf(largest)]);		
				}
			});
		});
	});
}

findLargest('../object',function(err, filename) {
	if(err) return console.error(err);
	console.log("largest file was:", filename);
})


/*
异步毁掉的四个问题
1. 嵌套层数很深，难以维护
2. 无法正常使用return和throw try catch 内层回调跟外层回调不在同一执行栈
3. 无法正常检索堆栈信息
4. 多个回调之间难以建议联系

因为异步回调函数会在一个新的栈里执行，所以在当前栈里无法获取新栈里的错误信息，之前的也无法捕获这个栈抛出的错误，所以在异步回调中没有办法正常使用try catch错误处理机制
要预先定义内层回调所需的一些变量，这些变量可能会被其他函数修改而出现错误
*/