# 3.2 二进制数据，文件

## ArrayBuffer — 原始二进制缓冲区

```js
let buffer = new ArrayBuffer(16);  // 16 字节，所有字节初始为 0
buffer.byteLength;                 // 16

// ArrayBuffer 本身不能直接操作 — 需要用视图：
```

## TypedArray — 类型化数组视图

| 类型 | 字节 | 范围 |
|------|------|------|
| `Int8Array` | 1 | -128 ~ 127 |
| `Uint8Array` | 1 | 0 ~ 255 |
| `Uint8ClampedArray` | 1 | 0 ~ 255（箝位） |
| `Int16Array` | 2 | -32768 ~ 32767 |
| `Uint16Array` | 2 | 0 ~ 65535 |
| `Int32Array` | 4 | -2^31 ~ 2^31-1 |
| `Uint32Array` | 4 | 0 ~ 2^32-1 |
| `Float32Array` | 4 | IEEE 754 单精度 |
| `Float64Array` | 8 | IEEE 754 双精度 |
| `BigInt64Array` | 8 | 有符号 bigint |
| `BigUint64Array` | 8 | 无符号 bigint |

```js
let buffer = new ArrayBuffer(16);
let view = new Uint32Array(buffer);
view[0] = 42;
// 同一缓冲区，不同视图
let view8 = new Uint8Array(buffer);
view8[0];  // 42（小端字节序）

// 截断行为
new Uint8Array([256])[0];        // 0（取低 8 位）
new Uint8ClampedArray([256])[0]; // 255（箝位到 0-255）
```

## DataView — 灵活视图

```js
let buffer = new ArrayBuffer(16);
let view = new DataView(buffer);

view.setInt32(0, 42, true);   // 偏移 0，小端字节序
view.getInt32(0, false);      // 偏移 0，大端字节序
view.setFloat64(4, 3.14);

// 可混合读取不同类型，可控制字节序
```

## TextEncoder / TextDecoder

```js
// 编码
let encoder = new TextEncoder();
let bytes = encoder.encode('Hello');  // Uint8Array

// 解码
let decoder = new TextDecoder('utf-8');
let text = decoder.decode(bytes);     // "Hello"

// 流式解码（处理分片数据）
let decoder = new TextDecoder('utf-8', { fatal: true, ignoreBOM: false });
let str1 = decoder.decode(chunk1, { stream: true }); // 缓冲不完整字节
let str2 = decoder.decode(chunk2); // 最后一块
```

## Blob

```js
let blob = new Blob(['<html>...</html>'], { type: 'text/html' });
blob.size;       // 字节数
blob.type;       // MIME 类型
blob.slice(0, 1024);  // 切片

// Blob URL
let url = URL.createObjectURL(blob);
URL.revokeObjectURL(url);

// 读取
let reader = new FileReader();
reader.onload = e => console.log(e.target.result);
reader.readAsDataURL(blob);        // base64 data URL
reader.readAsText(blob);           // 字符串
reader.readAsArrayBuffer(blob);    // ArrayBuffer
```

## File — Blob 的子类

```js
// 来自 <input type="file"> 或拖放
file.name      // 文件名
file.size      // 字节数
file.type      // MIME
file.lastModified

// 上传
let formData = new FormData();
formData.append('file', file);
fetch('/upload', { method: 'POST', body: formData });

// 预览
let url = URL.createObjectURL(file);
img.src = url;
img.onload = () => URL.revokeObjectURL(url);
```
