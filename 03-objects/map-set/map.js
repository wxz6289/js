let m = new Map([["name", "King"],["age", 20]]);
m.set(1, "number");
m.set('1', "string");
let a = { "t": 1 };
let b = { "t": 1};
m.set(a, "a");
m.set(b, "b");
m.set(a, "a2");
console.log(m);

console.log(m.get(a));
