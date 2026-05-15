# 多样性

- 一个模块可以有 N 个实例
- 一个模块实例可以使用 0-1 个内存实例
- 一个模块实例可以使用 0-1 个表格实例
- 一个内存或表格实例能够被 0-N 个模块实例使用(动态链接)

## WebAssembly编译器

- clang/clang++ -target wasm32-unknown-unknown|wasm64-unknown-unknown
- Rust wasm-bingen-rayon
- AssemblyScript 不支持生成线程，但支持原子操作和使用SharedArrayBuffer
