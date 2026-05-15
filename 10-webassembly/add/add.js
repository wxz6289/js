import { readFile } from 'fs/promises';

(async () => {
  const wasm = await readFile('./add.wasm');
  const { instance: { exports: { add } } } = await WebAssembly.instantiate(wasm);
  console.log(add(2, 8))
})();
