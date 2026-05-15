import { parentPort } from 'worker_threads';

parentPort.on('message', (buffer) => {
  buffer.foo = 'bar';
  const view = new Uint8Array(buffer);
  view[0] = 2;
  console.log('worker updated');
  parentPort.postMessage('done')
});