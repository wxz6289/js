import { runInNewContext } from 'vm';

const arr = runInNewContext('new Array(1,2)');

const ina = new Uint8Array([1, 2]);

console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(arr);
console.log(ina);
console.log(Array.isArray(ina));