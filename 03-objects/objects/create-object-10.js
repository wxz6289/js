function Person(name, age) {
	this.name = name;
	this.age = age;

	if(typeof this.showInfo != 'functon') {
		Person.prototype.showInfo = function() {
			console.log(this.name, this.age);
		}
	}
}

var person = new Person("Dreamer", 12);
person.showInfo();