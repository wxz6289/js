new Promise(
	/* 执行器 executor */
	function(resolve, reject) {
		resolve(); // 数据处理完成
		reject(); // 数据处理出错
	}
)
.then(function A(){
	// 成功
},function B(){
	// 失败
})

/*
Promise 是一个代理对象，它和原先进行的操作并无关系
它通过引入一个回调，避免了更多的回调

Promise的三个状态
1. pending [待定]初始状态 
2. fulfilled [实现] 操作成功  resolve调用之后
3. rejected [被否决] 操作失败

Promise状态被改变就会触发then()里的响应函数处理后续步骤。
Promise状态一经改变就不会再改变
每个then都会返回新的Promise对象实例

*/