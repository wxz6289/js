// 字面量写法实际隐式调用Object.create(), 字面量语法构造函数不能被重新定义
var car = {
    doors: 4
};

var  car2 = Object.create(Object.prototype, {
    wheels: {
        writable: true,
        configurable: true,
        value: 5
    }
});

console.log(car.doors);
console.log(car2.wheels);

var foo = new Object();
var bar = {};
console.log(typeof foo);
console.log(typeof bar);

global.Object = function() {
    console.log(arguments.callee, "callee");
    arguments.callee.call();
};

var foo = new Object();
