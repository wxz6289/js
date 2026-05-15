function Accommodation() {

}

var house = new Accommodation();

var apartment = new Accommodation();

console.log(house == apartment);
// 实例上的constructor属性是指向创建该实例所使用的构造函数
console.log(house.constructor === Accommodation, apartment.constructor === Accommodation);
// instanceof 关键字用来检查对象是否某个构造函数的实例
console.log(house instanceof Accommodation, apartment instanceof Accommodation);
// 使用对象的构造函数创建对象,与直接使用Accommodation一样，不过这种方法很少用
var house1 = new house.constructor();
console.log(house1 instanceof Accommodation, house1.constructor === Accommodation);