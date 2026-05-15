function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

function createObject(oringin) {
	var clone = object(oringin);
	clone.sayHi = function() {
		console.log("hi");
	}
	return clone;
}

var person = {
	name: "king",
	age: 20,
	friends: ["Vagao"]
}

var p = createObject(person);
p.sayHi();
console.log(p.name, p.age);
p.friends.push("Hanmei");
console.log(p.friends);

var p2 = createObject(person);
p2.sayHi();
console.log(p2.name, p2.age);
console.log(p2.friends);