function Person(name, age) {
	var o = new Object();
	o.name = name;
	o.age = age; 
	o.showInfo = function() {
		console.log(this.name, this.age);
	}
	return o;
}

var me = new Person("King", 21);
me.showInfo();
console.log(me instanceof Person);