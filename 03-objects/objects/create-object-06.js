function Person() {
}

Person.prototype.name = "Dreamer";
Person.prototype.age = 20;
Person.prototype.showInfo = function() {
	console.log(this.name, this.age);
}

var person1 = new Person();
person1.name = "King";
person1.showInfo();
var person2 = new Person();
person2.showInfo();

/*person1.showInfo();
var person2 = new Person();
person2.showInfo();

console.log(person1.showInfo === person2.showInfo);
console.log(person1 === person2);
console.log(Person.prototype.constructor === Person);
console.log(person2.__proto__ === Person.prototype);*/