function Person(name, age) {
	var o = new Object();
	o.showInfo = function() {
		console.log(name, age)
	};
	return o;
}

var person = Person("King", 12);
person.showInfo();

