对象引用不能在线程之间共享。

ArrayBuffer和SharedArrayBuffer的实例代表长度固定且不能调整大小的二进制缓冲区。其内容不能直接修改,需要创建相应的缓冲区视图来修改。SharedArrayBuffer允许跨线程共享内存。
属性
byteLength
slice(begin, end)

缓冲区的长度必须是传入它的特定实例所使用元素字节长度的倍数

一个字节8位二进制位，两位16进制位

```js
const { add, and, compareExchange, load } = Atomics
add(TypedArray, index, value) // 返回旧值
and(TypedArray, index, value) // 返回旧值
compareExchange(typedArray: BigInt64Array | BigUint64Array, index: number, expectedValue: bigint, replacementValue: bigint): bigint

load(typedArray, index) // typedArray[index]
// 如果值与期待值相同则替换，返回旧值，否则返回实际值
```

isLockFree(size) size为TypedArray的BYTES_PER_ELEMENT的值， 返回true表示可快速使用当前系统硬件执行锁定机制，返回false表示需要手动执行锁定机制

数据序列化和反序列化 缓冲区表示的内容有关

序列化对象 MessagePack msgpack5

线程间通信时的性能权衡通常不是由于传输的有效载荷的大小，而更可能是由于序列化和反序列化有效载荷的成本。

## 锁

futex 快速用户空间互斥锁  单个执行线程获得对特定数据的独占访问权。

status = Atomics.wait(typedArray, index, value, timeout) 冻结线程，浏览器主线程不允许调用
status

- not-equal
- timed-out
- ok

promise = Atomics.waitAsync(typedArray, index, value, timeout) wait()的异步版本，可在主线程中使用，不一定对CPU密集型算法的热路径有用。

awaken = Atomics.notify(typedArray, index, value, count) 返回被唤醒的线程数 不会阻塞线程，可在主线程中使用

## 环形缓存器

采用队列实现，一对索引，移动索引而不是数据

## 演员模型 Actor

Actor 的核心思想是 独立维护隔离状态，并基于消息传递实现异步通信。

根据 actor 的底层调度方式，其又可以分为：基于线程的 actor 和事件驱动的 actor。两者在底层的线程使用方式上有所区别。目前，绝大多数编程语言采用的事件驱动的 actor 模型，其在资源分配方面更加合理，执行效率也更高；缺点在于底层实现复杂度高。

```bash
ps -p 13575 -o pid,vsz,rss,pmem,comm,args
```

## 分析

- 低内存限制
- 低核心数
