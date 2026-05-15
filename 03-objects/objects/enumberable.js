var  car = {};

Object.defineProperty(car, 'door', {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 4
});

Object.defineProperty(car, 'wheels', {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 4
});

Object.defineProperty(car, 'secrectTrackingDeviceEnabled', {
    enumerable: false,
    value: true
});

for(var x in car) {
    console.log(x);
}
// 获取可枚举属性
console.log(Object.keys(car));
// 获取所有特性
console.log(Object.getOwnPropertyNames(car));
// 判断是否是可枚举属性
console.log(car.propertyIsEnumerable('wheels'));

console.log(car.propertyIsEnumerable("secrectTrackingDeviceEnabled"));

console.log(car.secrectTrackingDeviceEnabled);