function Person(name, age) {
	this.name = name,
	this.age = age,
	this.friends = ["XiaoZhuzi", "King"]
}

Person.prototype = {
	constructor: Person,
	showFriends: function() {
		console.log(this.friends.toString());
	}
}

var person1 = new Person("Dreamer", 21);
var person2 = new Person("Zhaopp", 16);

person2.friends.push("Dreamer");

person1.showFriends();
person2.showFriends();

console.log(person1.showFriends === person2.showFriends);
console.log(person1.friends == person2.friends);