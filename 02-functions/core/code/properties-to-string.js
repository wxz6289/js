// Function.toString / valueOf

function sum(a) {
  console.log('a:', a);
}

console.log(sum.toString());
console.log(sum.toLocaleString());
console.log(sum.valueOf() === sum);

console.log(((a, b) => a + b).name); // ''
console.log(new Function('a', 'b', 'return a + b').name); // 'anonymous'

const bound = sum.bind(null, 1);
console.log(bound.name); // 'bound sum'
