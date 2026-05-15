import msgpack from 'msgpack5';

const mp = msgpack()
const { encode, decode } = mp;

mp.register(0x42, MyType, mytipeEncode, mytipeDecode)

console.log(encode({ 'hello': 'world' }).toString('hex'))
console.log(decode(encode({ 'hello': 'world' })))

function MyType(size, value) {
  this.value = value
  this.size  = size
}

function mytipeEncode(obj) {
  var buf = new Buffer(obj.size)
  buf.fill(obj.value)
  return buf
}

function mytipeDecode(data) {
  var result = new MyType(data.length, data.toString('utf8', 0, 1))
    , i

  for (i = 0; i < data.length; i++) {
    if (data.readUInt8(0) != data.readUInt8(i)) {
      throw new Error('should all be the same')
    }
  }

  return result
}

let a = new MyType(2, 'a');
console.log(a);

console.log(encode(a).toString('hex'))
console.log(decode(encode(a)) instanceof MyType)
console.log(a instanceof MyType);
console.log(decode(encode(a)))