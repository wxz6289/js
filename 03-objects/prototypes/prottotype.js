function Accommodation() {

}

/*
 方法1：通过构造函数的prototype属性以逐个添加属性或方法扩展

// 通过prototype为构造函数添加属性
Accommodation.prototype.floor = 0;
Accommodation.prototype.rooms = 0;
Accommodation.prototype.shareEntrance = false;

// 通过prototype为构造函数添加方法
Accommodation.prototype.lock = function() {
	console.log("lock");
}

Accommodation.prototype.unlock = function() {
	console.log("unlock");
}

*/
/*
 方法2: 以对象字面量的方式为构造函数添加属性或方法

*/

Accommodation.prototype = {
	floor: 0,
	rooms: 0,
	shareEntrance: false,
	lock: function() {
		console.log("lock");
	},
	unlock: function() {
		console.log("unlock");
	}
};

// 创建实例
var house = new Accommodation();
var apartment = new Accommodation();
// 修改实例属性
console.log(house.floor, house.shareEntrance);
house.floor = 2;
house.shareEntrance = true;
console.log(house.floor, house.shareEntrance);

console.log(apartment.floor, apartment.shareEntrance);
// 调用实例方法
house.unlock();
apartment.lock();

// 动态扩展属性或方法
Accommodation.prototype.alarm = function() {
	console.log("alarm");
}

house.alarm();