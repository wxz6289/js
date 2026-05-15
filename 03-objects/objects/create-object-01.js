var person = new Object();
person.name = "Dreamer King";
person.age = 20;
person.showInfo = function(){
	console.log(`I'm ${this.name}, I'm ${this.age} old year. `);
};

console.log(person.name);
person.showInfo();

