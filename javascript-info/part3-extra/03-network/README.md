# 3.3 网络请求

## Fetch API

```js
let response = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});

// 响应属性
response.ok          // true 当 200-299
response.status      // HTTP 状态码
response.statusText  // 状态文本
response.headers     // 响应头（可迭代）

// 读取响应体（只能读一次！）
await response.json()        // JSON
await response.text()        // 纯文本
await response.blob()        // 二进制 Blob
await response.formData()    // FormData
await response.arrayBuffer() // ArrayBuffer
```

## 请求头

```js
// 设置请求头
fetch(url, { headers: { 'Authorization': 'Bearer token' } })

// 浏览器禁用的请求头（不能手动设置）
// Accept-Encoding, Cookie, Host, Referer...

// 读取响应头
response.headers.get('Content-Type')
for (let [key, value] of response.headers) {}
```

## POST 请求

```js
// JSON
fetch(url, { method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
});

// FormData
let formData = new FormData();
formData.append('name', 'John');
formData.append('file', fileInput.files[0]);
fetch(url, { method: 'POST', body: formData });
// 自动设置 Content-Type: multipart/form-data
```

## Fetch 错误处理

```js
try {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  let data = await response.json();
} catch (err) {
  // fetch 只对网络错误 reject（连接失败、DNS错误等）
  // HTTP 404/500 不会 reject — 需要手动检查 response.ok
}
```

## AbortController — 取消请求

```js
const controller = new AbortController();

setTimeout(() => controller.abort(), 5000);  // 5秒后取消

try {
  let response = await fetch(url, {
    signal: controller.signal
  });
} catch (err) {
  if (err.name === 'AbortError') {
    console.log('请求被取消');
  }
}

// 同时取消多个请求
let controller = new AbortController();
Promise.all([
  fetch(url1, { signal: controller.signal }),
  fetch(url2, { signal: controller.signal })
]);
controller.abort();  // 全部取消
```

## Fetch 进度

```js
// 下载进度（通过流读取）
let response = await fetch(url);
let reader = response.body.getReader();
let contentLength = +response.headers.get('Content-Length');

let receivedLength = 0;
let chunks = [];
while (true) {
  let { done, value } = await reader.read();
  if (done) break;
  chunks.push(value);
  receivedLength += value.length;
  console.log(`Received ${receivedLength} of ${contentLength}`);
}
```

## URL 对象

```js
let url = new URL('https://example.com/path?q=javascript');
url.protocol  // "https:"
url.hostname  // "example.com"
url.pathname  // "/path"
url.search    // "?q=javascript"

// URLSearchParams
url.searchParams.get('q')        // "javascript"
url.searchParams.set('page', 1)
url.searchParams.append('tag', 'js')
url.searchParams.delete('tag')
url.searchParams.has('q')
for (let [key, val] of url.searchParams) {}

// 编码
encodeURIComponent('a b')   // "a%20b"
decodeURIComponent('a%20b') // "a b"
```

## XMLHttpRequest (传统方式)

```js
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.setRequestHeader('Authorization', 'Bearer token');

xhr.onload = () => {
  if (xhr.status === 200) console.log(xhr.response);
};
xhr.onerror = () => console.log('Network error');
xhr.onprogress = (e) => {  // 下载进度
  if (e.lengthComputable) console.log(`${e.loaded}/${e.total}`);
};
xhr.upload.onprogress = (e) => {}; // 上传进度

xhr.send(body);  // GET 时不传 body

// 取消
xhr.abort();
```

## Server-Sent Events (SSE)

```js
let source = new EventSource('/events');

source.onmessage = (event) => {
  console.log('Received:', event.data);
};
source.addEventListener('customEvent', (event) => {
  console.log('Custom:', event.data);
});
source.onerror = () => console.log('Connection error');

// 服务端响应格式
// data: Message line 1
// data: Message line 2
// id: 123
// event: customEvent
//  (空行分隔)
```

## WebSocket

```js
let socket = new WebSocket('wss://example.com/socket');

socket.onopen = () => {
  socket.send('Hello Server!');
};
socket.onmessage = (event) => {
  console.log('Received:', event.data);
};
socket.onclose = (event) => {
  console.log(`Closed: ${event.code} ${event.reason}`);
};
socket.onerror = (error) => {};

// 方法
socket.send('text');
socket.send(blob);
socket.close(1000, 'reason');
```

## CORS (跨源资源共享)

```js
// 简单请求：GET/POST/HEAD + 简单头部 → 浏览器自动处理
// 非简单请求：浏览器先发 OPTIONS 预检请求

// 预检请求
fetch(url, {
  method: 'PATCH',
  headers: { 'X-Custom-Header': 'value' }
});
// → OPTIONS preflight → 服务端返回 Access-Control-Allow-Methods/Headers

// 凭据请求
fetch(url, { credentials: 'include' });  // 跨源发送 cookie
// 服务端必须返回: Access-Control-Allow-Credentials: true
// 且 Access-Control-Allow-Origin 不能是 *
```
