可迭代对象 是数组的泛化 可通过for..of遍历
必须实现方法Symbol.iterator,这个方法会被for..of自动调用，但是也可以直接调用。
迭代器必须有next()方法，它返回一个对象 {done: Boolean, value: any}，其中done表示迭代是否结束，value表示下一个值。

Iterables 可迭代对象是应用于Symbol.iterator方法的对象
Array-likes 类数组对象是有索引和length属性的对象

Array.from(obj [, mapFn, thisArg]) 可以把可迭代对象或类数组对象转换生产一个新的真正数组

