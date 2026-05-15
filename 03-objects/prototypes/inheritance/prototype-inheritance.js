/*
function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}
*/

var person = {
	name: "Nicholas",
	friends: ["Tom", "Aimi"]
};

var p1 = Object.create(person);
p1.name = "king";
p1.friends.push("Trump");
console.log(p1.name);
console.log(p1.friends);

var p2 = Object.create(person);
console.log(p2.name);
console.log(p2.friends);