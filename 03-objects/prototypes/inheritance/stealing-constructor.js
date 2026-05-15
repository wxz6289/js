function SuperType() {
	this.colors = ["red", "green"];
}

function SubType() {
	SuperType.call(this);
}

var sup1 = new SuperType();
sup1.colors.push("blue");
console.log(sup1.colors);

var sub2 = new SubType();
sub2.colors.push("black");
console.log(sub2.colors);
console.log(sub2 instanceof SuperType);