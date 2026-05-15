var  car = {};
Object.defineProperty(car, 'wheels', {
    writable: false,
    value: 4
});

Object.defineProperty(car, 'doors', {
    writable: true,  //默认是不可写的 
    value: 5
});

console.log(car.wheels);
car.wheels = 5;
console.log(car.wheels);
delete car.wheels;
console.log(car.wheels);

console.log(car.doors);
car.doors = 6;
console.log(car.doors);
