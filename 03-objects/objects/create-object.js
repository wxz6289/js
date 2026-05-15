/**
	使用字面量的形式创建对象
*/
var house = {
	rooms: 7,
	shareEntrance: false,
	lock: function() {
		console.log("lock");
	},
	unlock: function() {
		console.log("unlock");
	}
};

// 访问对象属性
console.log(house.rooms);
// 修改对象属性
house.rooms = 8;
console.log(house.rooms);
// 新增对象属性
house.floor = 2;
console.log(house.floor);
// 调用对象的方法
house.lock();