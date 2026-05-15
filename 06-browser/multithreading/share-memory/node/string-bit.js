function str2ArrayBuffer(str) {
  const buffer = new ArrayBuffer(str.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i);
  }
  return view
}


const views = str2ArrayBuffer('hello nodejs!')
console.log(views);
const str = "\u{261E}"
const view2 = str2ArrayBuffer(str)
console.log(view2);
console.log(str, str.length, str.codePointAt(0), str.charCodeAt(0), String.fromCodePoint(9758));


const encoder = new TextEncoder();
const decoder = new TextDecoder();
let result = encoder.encode(str);
console.log(result);
result = decoder.decode(result);
console.log(result);
result = decoder.decode(new Uint8Array([226, 130, 172]));
console.log(result);

