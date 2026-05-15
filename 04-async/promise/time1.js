console.log("here we go");
new Promise(resolve => {
	setTimeout(() => {
		resolve('Hello');
	}, 2000);
}).then( value => {
	console.log(value, " world");
});