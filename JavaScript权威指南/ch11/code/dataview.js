let litteEndian = new Int8Array(new Int32Array([1]).buffer)[0] == 1;
console.log(litteEndian);

const bytes = new Uint8Array([1, 2, 3, 0, 0, 0, 1, 2]);
let view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

let int = view.getInt32(0);
console.log(int);
int = view.getUint32(2, true);
console.log('int32:', int);
view.setUint32(1, 4, true);
console.log(bytes);
bytes[0] = 3;
console.log(bytes);
