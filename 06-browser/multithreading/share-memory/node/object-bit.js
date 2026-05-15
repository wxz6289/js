const encoder = new TextEncoder();
const decoder = new TextDecoder();

const obj = { a: 2, c1: "King" };

let result = encoder.encode(JSON.stringify(obj));
console.log(result);

result = decoder.decode(result);
console.log(result);