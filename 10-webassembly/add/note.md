# WebAssembly

```bash
npx -p wabt wat2wasm add.wat -o add.wasm
```

## WebAssembly中的原子操作

`[i32|i64].atomic.[load|load8_u|load16_u|load32_u]` 等同 Atomics.load()

`[i32|i64].atomic.[store|store8|store16|store32]` 等同 Atomics.store()

`[i32|i64].atomic.[rmw|rmw8|rmw16|rmw32].[add|sub|and|or|xor|xchg|cmpxchg][ |_u]`

`Memeory.atomic.[wait32|wait64]` 等同Atomics.wait()

Memeory.atomic.notify() 等同Atomics.notify()

Atomic.fence  保证对内存共享的非原子访问顺序

所有这些操作都是在WebAssembly模块的连续内存中，这在js初始化wasm模块的配置选项中提供。可以支持ShareArrayBuffer能够跨线程使用。