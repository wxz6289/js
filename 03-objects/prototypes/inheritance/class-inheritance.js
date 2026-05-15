class Person {
	constructor() {
		this.name = "King",
		this.age = 20;
	}

	showInfo() {
		console.log(this.name, this.age);
	} 

	sayHi() {
		console.log("Hi, I'm here!");
	}
}

class Student extends Person {
	constructor(){
		super();
		this.school = "Jiangnan";
	}

	showInfo() {
		console.log(this.name, this.age, this.school);
	}
}

var student = new Student();
student.showInfo();
student.sayHi();