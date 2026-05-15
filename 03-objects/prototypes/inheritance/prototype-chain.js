function SuperType() {
	this.superProperty = true;
}

SuperType.prototype.getSuperPropertyValue = function() {
	return this.superProperty;
}

function SubType() {
	this.subProperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubProperty = function() {
	return this.subProperty;
}

var sub = new SubType();
console.log(sub.getSuperPropertyValue());
console.log(sub instanceof SuperType);