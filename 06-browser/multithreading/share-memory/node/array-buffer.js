const ab = new ArrayBuffer(8);
const view = new Uint8Array(ab);
for (let i = 0; i < view.byteLength; i++){
  view[i] = i;
}

console.log(view);
console.log(ab);

console.log(ab.slice());
console.log(ab.slice(-3, -2));