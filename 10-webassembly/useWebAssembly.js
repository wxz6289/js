/* const importObject = {
  imports: {
    imported_func: (arg) => console.log(arg)
  }
}

fetch('./simple.wasm')
  .then((res) => res.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes, importObject)).then((result) => {
    result.instance.exports.exported_func()
  }) */

/* const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
new Uint32Array(memory.buffer)[0] = 42; */



/* const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100
});

fetch('./memory.wasm')
  .then((res) => res.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes, {
    js: {
      mem: memory
    }
  })).then((results) => {
    console.log(results.instance.exports, 'results')
    const i32 = new Uint32Array(memory.buffer);
    for (let i = 0; i < 10; i++) {
      i32[i] = i;
    }

    const sum = results.instance.exports.accumulate(0, 10);
    console.log(sum);
  }) */





/* fetch('./table.wasm')
  .then((res) => res.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes)).then((results) => {
    const tbl = results.instance.exports.tbl
    console.log(tbl.get(0)(), tbl.get(1)())
  }) */

const importObj = {
  imports: {
    imported_func: (arg) => console.log(arg)
  }
}

WebAssembly.instantiateStreaming(fetch('./simple.wasm'), importObj)
  .then((result) => {
    console.log(result, 'results')
    result.instance.exports.exported_func();
  });

