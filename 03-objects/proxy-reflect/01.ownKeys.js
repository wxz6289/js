let a = {
    name: "King",
    [Symbol('label')]: "great"
};

let keys = Reflect.ownKeys(a);

console.log(keys);

let properties = Object.getOwnPropertyNames(a);
let syms = Object.getOwnPropertySymbols(a);

console.log(properties);
console.log(syms);