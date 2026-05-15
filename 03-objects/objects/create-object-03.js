function createPerson(name, age) {
	return {
		name,
		age,
		showInfo() {
			console.log(`I'm ${this.name}, I'm ${this.age} old year. `);
		}
	};
}

var me = createPerson("Dreamer", 20);
console.log(me.name, me.age);
me.showInfo();

var you = createPerson("King", 16);
you.showInfo();
console.log(me.showInfo === you.showInfo);