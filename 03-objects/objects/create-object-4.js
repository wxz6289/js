class Polygon {
	constructor(h, w){
		this.height = h;
		this.width = w;
	}
}

class Square extends Polygon {
	constructor(s){
		super(s, s);
	}
	
	get area() {
		return this.height * this.width;
	}

	set sideLenth(len){
		this.width = len;
		this.height = len;
	}
}

var square = new Square(4);
console.log(square.area);
square.sideLenth = 5;
console.log(square.area);

console.log(Object.getPrototypeOf(square));

// 在原型链上查找属性比较耗时，对性能有副作用，这在性能要求苛刻的情况下很重要。另外，试图访问不存在的属性时会遍历整个原型链。
// 遍历对象的属性时，原型链上的每个可枚举属性都会被枚举出来。要检查对象是否具有自己定义的属性，而不是其原型链上的某个属性，则必须使用所有对象从Object.prototype继承的 hasOwnProperty 方法。
