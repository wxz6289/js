var  car = {};

Object.defineProperty(car, 'doors',  {
    configurable: true,
    value: 4
});

Object.defineProperty(car, 'wheels', {
    configurable: false,
    value: 5
});

delete car.doors;
console.log(car.doors);

delete car.wheels;
console.log(car.wheels);

Object.defineProperty(car, 'doors', {
    configurable: false,
    value: 3
});

console.log(car.doors);

Object.defineProperty(car, 'wheels', {
    configurable: true,
    value: 4
});

console.log(car.wheels);

