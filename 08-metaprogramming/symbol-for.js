let UUID = Symbol.for("UUID");
let UUID2 = Symbol.for("UUID");
let symo = {
    [UUID]: "Hello"
}

let uuid = Symbol("UUID");

console.log(symo[UUID]); // Hello
console.log(UUID); // Symbol(UUID)
console.log(typeof UUID); // symbol
console.log(symo[UUID2]); // Hello
console.log(UUID === UUID2); // true

console.log(Symbol.keyFor(UUID)); // UUID
console.log(Symbol.keyFor(UUID2)); // UUID
console.log(Symbol.keyFor(uuid)); // undefined


