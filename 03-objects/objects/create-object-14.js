class Person {
	constructor() {
		this.name = "Dreamer";
		this.age = 21;
	}

	static hello() {
		console.log("hello");
	}

	showInfo() {
		console.log(this.name, this.age);
	}
}

var  p = new Person();
p.showInfo();
Person.hello();