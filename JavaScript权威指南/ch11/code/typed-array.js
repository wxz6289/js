/* let white = Uint8ClampedArray.of(256, 255, 255, 0);
console.log(white);
let white2 = new Uint8ClampedArray(white);
let white3 = Uint32Array.from(white2);
console.log(white2);
console.log(white3); */

/* let buffer = new ArrayBuffer(10);
let int8 = new Int8Array(buffer);
let int16 = new Int16Array(buffer);
let int32 = new Int32Array(buffer, 4, 1);
console.log(buffer)
console.log(int8);
console.log(int16);
console.log(int32); */

/* let ints = new Int16Array(10);
let result = ints.fill(3).map(x => x ** x).join('-');
console.log(ints);
console.log(result); */

let btyes = new Uint8Array(16);
let pattern = new Uint8Array([0, 1, 2, 3, 4]);
btyes.set(pattern); // 5
console.log(btyes);
btyes.set(pattern, 4); // 
console.log(btyes);
btyes.set([2, 3, 1, 2], 8);
console.log(btyes);
let sub = btyes.slice(6, 12);
console.log(sub, sub.byteOffset);

let suba = btyes.subarray(6, 12);
console.log(suba, suba.byteLength, suba.byteOffset);
console.log(suba.buffer === btyes.buffer);
