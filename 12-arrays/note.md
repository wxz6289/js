# 数组

## 创建数组的方式

1. 字面量方式 `[]`
2. 构造函数 [new] Array() 注意：当传入一个数值型参数是默认是指定定数组大小,如果数值不是非负整数则会报错。
属性
3. Array.of() //解决Array传递单个数值类型参数时会当作数值长度解析的问题
4. Array.from() // 类数组对象或迭代器转数组和数组复制，能够避免空槽，还提供了映射功能。

length 数组中元素个数(跟索引有关)，可修改，清空数组的最好的方法是将lenght置为0。
delete操作符可以将数组元素从数组中删除，使其成为稀疏数组，但不改变length大小。
如过数组中的字符串键值能够转换成十进制非负整数的话，会被当作数组索引处理。

## 数组方法

- isArray()
- of()
- from() 能够将类数组或可迭代对象转换成数组

## 迭代数组

- for/of
- forEach() / map() / filter() 能感知稀疏数组

数组的length属性可读写，能够改变数组的大小，随着数组的操作回自动变化。
delete操作符删除数组元素不会改变数值的length属性，会将数组变成稀疏数组。

## copyWithin() 数组内复制

从数组中复制一部分到同一数组中的另一个位置，覆盖这个位置的所有值。
将数组内元素指定索引开始的用来源开始索引数组元素填充，实现数组内复制，改变原数组
copyWith(targetStartIndex, formStartIndex， fromEndIndex)
不会增加原数组长度。
`反向复制`算法解决可能会出现的重复复制已复制的值。

## 排序

- sort([compare])
reverse()

字符串本地化比较函数localCompare()

## 填充

fill(char[, start, end])

## 查找

indexOf(el, start)
lastIndexOf(el, start)
find(fn)
findIndex(fn)
includes(el[, start])

## 字符串化

join([str])
toString() 数组各元素调toString(),再调join()

类型数组 存储单一类型

- Uint8ClampedArray

# 存取函数

- indexOf() / lastIndexOf()

# 字符串表示

- join()
- toString()

# 创建新数组

- concat()
- slice()
- splice()

# 栈／队列方法

- push()
- unshift()
- pop()
- shift()
- splice()

# 排序

- reverse()
- sort()

# 迭代方法

- forEach()
- every()
- some()
- filter()
- map()
- reduce() / reduceRight()

数组的误用方式：

1. 添加非数值属性
2. 构造空洞
3. 倒序填充数组

JS引擎对数组的内部实现做了特殊的优化，尝试使元素存储在连续的内存区域，从而使数组运行的非常快，所有应该将数组做为有序数据结构来用。

数组的遍历

1. for
2. for..of 不能获取当前元素索引
3. for..in 会迭代所有属性，速度较慢(不建议使用)
