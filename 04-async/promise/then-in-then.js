console.log("here we go");
new Promise(resolve => {
	setTimeout(() => {
		resolve('Hello');
	}, 1000);
}).then( value => {
	console.log(value, " world");
	return new Promise(resolve => {
		console.log('step 1-1');
		setTimeout(() => {
			resolve(110);
		},1000);
	}).then( value => {
		console.log("step 1-2");
		return value;
	}).then(value => {
		console.log("step 1-3");
		return value;
	})
})
.then(value => {
	console.log("step 2");
	console.log(value)
});

// 因为.then()返回的还是Porimse实例，所以会等里面的then()执行完了再执行外面的then
// 最好将其展开，便于阅读
