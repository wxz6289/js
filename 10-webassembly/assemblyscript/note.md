# AssemblyScript

```bash
npx -p assemblyscript asc add.ts -o add.wasm
pnpm add assemblyscript @assemblyscript/loader

```

AssemblyScript不提供产生线程的能力，但线程可以在JavaScript环境中产生，而且SharedArrayBuffer可以用于WebAssembly内存。
