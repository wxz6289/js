function Person() { }

Person.prototype = {
	name: "Dreamer",
	age: 20,
	showInfo() {
		console.log(this.name, this.age);
	}
};

Object.defineProperty(Person.prototype, 'constructor', {
	enumerable: false,
	value: Person
});

var dm = new Person();
dm.showInfo();
console.log(dm.constructor === Person);
console.log(dm instanceof Person);
console.log(Object.getOwnPropertyDescriptor(dm.__proto__,'constructor'));

