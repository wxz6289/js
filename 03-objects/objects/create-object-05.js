function Person(name, age) {
	this.name = name;
	this.age = age;
	this.showInfo = function() {
		console.log(`I'm ${this.name}, I'm ${this.age} old year. `);
	};
}

var me = new Person("Dreamer", 20);
me.showInfo();

Person("king", 16);
global.showInfo(); //全局对象调用

var o = Object();
Person.call(o, "DK", 32); //另一个对象调用 
o.showInfo();

