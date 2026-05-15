function Person() { }

Person.prototype = {
	constructor: Person,
	name: "Dreamer",
	age: 20,
	friends: ["XuYing","Trump"],
	addFriends(friend) {
		this.friends.push(friend);
	}
};

var person1 = new Person();
var person2 = new Person();
person2.addFriends("AiLen");
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);


