const { add, sub, and, or, xor, compareExchange, exchange, load, store, isLockFree } = Atomics;

const arr = new Uint8Array(4)
arr[0] = 3;
let result = add(arr, 0, 2);
console.log(arr);
console.log('result:', result);

result = and(arr, 0, 3);

console.log(arr);
console.log('result:', result);

result = compareExchange(arr, 0, 1, 3);

console.log(arr);
console.log('result:', result);

result = compareExchange(arr, 0, 1, 2);

console.log(arr);
console.log('result:', result);

result = exchange(arr, 0, 2);

console.log(arr);
console.log('result:', result);

result = or(arr, 1, 3);
console.log(arr[1]);
console.log(result);

arr[2] = 0b11;
result = xor(arr, 2, 0b10);
console.log(arr[2]); // 01
console.log(result); // 11

arr[3] = 12;
result = sub(arr, 3, 4)
console.log(arr[3], result); // 8 12

console.log(isLockFree(2));
console.log(arr.BYTES_PER_ELEMENT);

result = load(arr, 0);
console.log(arr[0], result);

result = store(arr, 0, 6);
console.log(arr[0], result);


// !!! 返回值忽略转换
result = store(arr, 0, 300);
console.log(arr[0], result);