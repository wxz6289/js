const buffer = new ArrayBuffer(16);
const view = new Float64Array(buffer);
view[0] = 1.0123456789012345678901;
console.log(view[0]);

const view32 = new Float32Array(buffer);
view32[2] = 1.0123456789012345678901;
console.log(view32[2]);

console.log(view[1])
console.log(view32[0])
