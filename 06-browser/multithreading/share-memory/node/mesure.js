import { Worker } from 'worker_threads';

const count = Number(process.argv[2] || 0);

for (let i = 0; i < count; i++) {
  new Worker(import.meta.dirname + '/worker.js');
}

console.log(`pid: ${process.pid}, threads: ${count}`);
setTimeout(() => {}, 1*60*60*1000)