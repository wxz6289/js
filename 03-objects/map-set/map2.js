let john = { name: "John"};
let king = { name: "King"}

let visitsCountMap = new Map();//new Map();
visitsCountMap.set(john, 12);
visitsCountMap.set(king, 20);
let john2 = john;
john = null;
console.log(visitsCountMap.size);
console.log(visitsCountMap.get(king));
console.log(visitsCountMap.get(john2));


