import { Worker, isMainThread, workerData } from 'worker_threads';
import { strictEqual } from 'assert';
const { load, store } = Atomics;

if (isMainThread) {
  const shared = new SharedArrayBuffer(16);
  const sharedInt = new Int32Array(shared);
  sharedInt.set([2, 3, 5, 7]);
  for (let i = 0; i < 3; i++) {
    new Worker(import.meta.filename, { workerData: { i, shared } });
  }
} else {
  const { i, shared } = workerData;
  const sharedInt = new Int32Array(shared);
  const a = load(sharedInt, i);
  for (let j = 0; i < 1_000_000; j++){
    const b = load(sharedInt, 3);
    store(sharedInt, 3, a * b);
    strictEqual(load(sharedInt, 3), a * b);
  }
}