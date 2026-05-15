function Person(name, age) {
	this.name = name;
	this.age = age;
	this.showInfo = showInfo;
}

function showInfo() {
	console.log(`I'm ${this.name}, I'm ${this.age} old year. `);
};


var me = new Person("Dreamer", 20);
var you = new Person("King", 16);
console.log(me.showInfo == you.showInfo);
me.showInfo();
you.showInfo();
