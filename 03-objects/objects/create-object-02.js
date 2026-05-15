var person = {
	name: "Dreamer King",
	age: 20,
	showInfo: function(){
		console.log(`I'm ${this.name}, I'm ${this.age} old year. `);
	}
};

console.log(person.name);
person.showInfo();