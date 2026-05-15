let sym = Symbol('sym');

let desc = String(sym);

console.log(desc); // Symbol(sym)

try {
    desc = sym + '';
    console.log(desc); // 不执行
} catch (error) {
    console.log(error.message); // Cannot convert a Symbol value to a string
}

try {
   desc = sym + 1; 
} catch (error) {
    console.log(error.message); // Cannot convert a Symbol value to a number
}

if(sym) {
    console.log("sym is true"); // sym is true
}

let symo = {
    [sym] : "this is symbol prop",
    name: "King"
}

Object.defineProperties(symo, { 
    age: {
        enumerable: false,
        writable: true,
        configurable: true
    }   
});

console.log(Object.keys(symo)); // ["name"]
console.log(Object.getOwnPropertyNames(symo)); // ["name", "age"]
console.log(Object.getOwnPropertySymbols(symo)); // [Sysmbol(sym)]

console.log(Object.getOwnPropertySymbols(Symbol.prototype));
console.log(Object.getOwnPropertySymbols(RegExp.prototype));
console.log(Object.getOwnPropertySymbols(String.prototype));
console.log(Object.getOwnPropertySymbols(Array.prototype));
console.log(Object.getOwnPropertySymbols(Map.prototype));
console.log(Object.getOwnPropertySymbols(Set.prototype));
console.log(Object.getOwnPropertySymbols(WeakSet.prototype));
console.log(Object.getOwnPropertySymbols(WeakMap.prototype));
console.log(Object.getOwnPropertySymbols(Object.prototype));




