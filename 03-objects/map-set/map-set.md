# Map
Map是包含多组键值对的集合，其中的每个元素分别存放可访问的键名和它对应的值。常用来缓存频繁取用的数据，与Object的主要区别是Map允许使用所有数据类型作为键,并且支持链式调用，而Object仅支持字符串类型的键名。 Map集合的键名等价性判断是通过调用Object.is()来实现，而不像对象的属性名总会被强制转换成字符串类型。
+ 对象可以作为键
+ 迭代顺序是插入顺序
+ 附加方便的方法，有size属性
主要方法：
+ new Map() 数组对象类的参数
+ set(key, value) 添加／设置元素
+ get(key) 获取键值
+ has(key)
+ delete(key)
+ clear()
属性
+ size

Object转Map
new Map(Object.entries(obj))

遍历Map
1. keys()
2. values()
3. entries() for..of默认使用
4. forEach()

# Set
Set是一个不包含重复值的集合，所有值都只能出现一次，并且它们之间彼此保持独立，不会对存入的值进行类型转换，可以快速访问其中的数据，更有效地追踪各种离散值，常用来检测对象中是否存在某个键名。但是不能像数组一样直接通过索引来访问Set中的元素。
+ 不允许元素重新排序
+ 保持插入顺序

主要方法：
1. new Set(iterable)  可迭代对象如数组、类数组、Set、Map等
2. add(value) 
3. delete(value) 删除集合中某个值
4. has(value) 检测对象中是否存在某个值
5. clear() 清除集合中的所以元素
6. size 集合元素数量

遍历Set
1. for..of
2. forEach(callback(value,key, ownerSet)) 因为Set没有键,为了与数组、Map等的一致性,将key设置成与value相同的值 
3. keys()
4. values()
5. entries()

将对象存储在Set的实例与存储在变量中一样，只要Set实例中的引用存在,垃圾回收机制就不能释放该对象的内存空间，因此Set类型是一种强引用的集合。有时我们希望引用不存在时，相应Set集合中的这些引用也随之消失，以避免出现内存泄漏。

WeakSet是一种特殊的Set,它不会阻止js将它的元素从内存中移除。
WeakMap/WeakSet集合只存储对象的弱引用，并且不可以存储原始值，集合中的弱引用是对象的唯一的引用，它不会阻止内存移除对象并释放相应内存。
WeakMap它和 Map 的第一个区别是它的键必须是对象，不能是基础类型的值。
WeakMap不支持keys()、values()、entries()、clear()方法和size属性，不能够进行迭代，没有办法获取它的所有键值。目前 WeakMap 中元素个数并不可知。引擎可能已经清理，也可能没有，也可能只进行了部分的清理。处于这个原因，允许访问 WeakMap 整体的方法并不支持。WeakMap 的目的是，我们可以当且仅当该对象存在时，为对象存储一些内容。但我们并不会因为存储了对象的一些内容，就强制对象一直保留在内存中。(自动清理)
仅支持下列方法：
1. get(key)
2. set(key, value)
3. delete(key, value)
4. has(key)

WeakSet 是 Set 的一个变体，仅存储对象，并且当对象由于其他原因不可引用的时候将其删除。
+ 与Set类似，但仅能将对象添加进入WeakSet,不可以是基本类型,如添加原始值则会报错；
+ 在WeakSet的实例中，如果向add()方法传如非对象参数会报错，而向has()和delete()方法传入非对象参数则会返回false；
+ 仅当对象存在其他的位置的引用时它才存在与set中；
+ 像Set一样，支持`add()`、`has()`和`delete()`方法，不支持`sizes`属性,`keys()`和`clear()`方法；
+ 不支持迭代器，如`keys()`、`values()`和`forEach()`方法, 也不能使用`for..of`循环。

WeakMap 和 WeakSet 最显著的限制就是没有迭代器，也不能获取当前所有内容。但并不妨碍其主要任务 —— 作为对象的附加存储，该对象在其他位置被保存或管理。
WeakMap的键名必须是非null类型的对象
WeakMap 和 WeakSet 被用作主要对象存储的次要数据结构补充。一旦对象从存储移除，那么存在于 WeakMap/WeakSet 的数据将会被自动清除。

# 应用
1. 数组去重
   用一个含有重复元素的数组初始化Set集合，会自动移除重复的元素，然后使用扩展运算符`...`或Array.from()将这些元素放到新数组中。