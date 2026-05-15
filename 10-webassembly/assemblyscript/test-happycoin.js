// import { WASI, init } from '@wasmer/wasi';
// import { readFile } from 'fs/promises';
// import loader from '@assemblyscript/loader';
import { getHappyConins } from './happycoin.js'
import { Worker, isMainThread, parentPort } from 'worker_threads';

const THEAD_COUNT = 4;

if (isMainThread) {
  let inFlight = THEAD_COUNT;
  let count = 0;
  for (let i = 0; i < THEAD_COUNT; i++) {
    const worker = new Worker(new URL(import.meta.url));
    worker.on('message', msg => {
      count += msg.length;
      proccess.stdout.write(msg.join(' ') + " ");
      if (--inFlight === 0) {
        process.stdout.write("\n count " + count + "\n");
      }
    });
  }
} else {
  const happycoinsWasmArray = getHappyConins(10_000 / THEAD_COUNT);
  console.log(happycoinsWasmArray, 'kkk')
  // await init();
  // const wasi = new WASI();
  // const wasm = await readFile('./happycoin.wasm');
  // const happycoinModule = await loader.instantiate(wasm);
  // console.log(happycoinModule, 'hdhd')
  // wasi.start(happycoinModule);

  // const happycoinsWasmArray = happycoinModule.exports.getHappyCoins(10_000_000 / THEAD_COUNT);
  // const happycoins = happycoinModule.exports.__getArray(happycoinsWasmArray);
  parentPort.postMessage(happycoinsWasmArray);
}