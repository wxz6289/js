import { Worker } from 'worker_threads';

const worker = new Worker(import.meta.dirname + '/worker.js');
const buffer = new SharedArrayBuffer(12);
const view = new Uint8Array(buffer);

console.log('now:', view[0]);
worker.postMessage(buffer);

setTimeout(() => {
  console.log('later', view[0]);
  console.log('prop', buffer.foo);
  worker.unref();
}, 500)

worker.on('message', (e) => {
  console.log('main:', e);
});

// import.meta.dirname|filename
/*
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);
*/