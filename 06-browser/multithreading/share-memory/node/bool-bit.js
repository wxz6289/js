const buffer = new ArrayBuffer(1);
const view = new Uint8Array(buffer);

function setBool(slot, value) {
  view[0] = (view[0] & ~(1<<slot)) | ((value|0) << slot) // 读取现有位,替换适当位，然后写回
}

function getBool(slot) {
  return !((view[0] & (1 << slot)) === 0)
}


setBool(0, true);
setBool(3, true);

console.log(view);
console.log(getBool(0));
console.log(getBool(3), getBool(2));
