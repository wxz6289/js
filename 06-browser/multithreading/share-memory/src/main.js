if (!window.crossOriginIsolated) {
  throw new Error("Can't use SharedArrayBuffer");
}

const worker = new Worker('./src/worker.js')

worker.addEventListener('error', (e) => {
  console.log('error:', e);
});

worker.addEventListener('messageerror', (e) => {
  console.log('merror:', e);
});

worker.addEventListener('message', (e) => {
  console.log('message:', e);
});

const buffer = new SharedArrayBuffer(1024);
const view = new Uint8Array(buffer);

console.log('Now: ', view[0]);

worker.postMessage(buffer);

setTimeout(() => {
  console.log('Later:', view[0]);
  console.log("prop:", buffer.foo);
}, 500)