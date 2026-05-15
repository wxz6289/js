console.log("here we go");
new Promise(resolve => {
	setTimeout(() => {
		resolve('Hello');
	}, 2000);
})
.then( value => {
	console.log(value, " world");
	(function() {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log("Mr. Luncy");
				resolve("Marry Tom");
			},2000);
		});
	}().then(value => {
		console.log(value,"test");
	}));
	//return false;
})
.then( value => {
	console.log("world ", value);	
});

// 如果then中不返回promise实例，则会继续执行后续的then

// .then() 接受两个函数作为参数，分别代表fullfilled和rejected
// .then() 返回一个新的Promise实例，所以它可以链式调用
// 当前面的Promise状态改变时，then根据其最终状态选择特定的响应函数执行，
// 状态响应函数可以返回新的Promise或其他值或不返回值
// 如果返回的是新的Promise,那么下一级的.then()会在新的Promise转太改变之后执行
// 如果返回其他值，则会立即执行下一级then()