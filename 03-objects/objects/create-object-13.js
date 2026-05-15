var person = {
	name: "King",
	age: 20,
	showInfo() {
		console.log(this.name, this.age);
	}
};

var me = Object.create(person,{
	job: {
		writeable: true,
		configurable: true,
		value: "Front End Enginger"
	}
});

me.showInfo();
me.name = "Dreamer";
me.showInfo();
console.log(me.job);
person.showInfo();