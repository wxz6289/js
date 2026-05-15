# 1.5 数据类型

## 原始类型的方法

原始类型（string, number, boolean, symbol, bigint）"看似有方法"，是因为 JS 临时创建了**对象包装器**：

```js
let str = "Hello";
str.toUpperCase();  // 创建 String 对象 → 调用方法 → 销毁对象
// null 和 undefined 没有包装器
```

## 数字

```js
1e6 = 1000000; 1e-6 = 0.000001;
// 十六进制: 0xFF (255)
// 八进制: 0o377 (255)
// 二进制: 0b11111111 (255)

// 精度问题
0.1 + 0.2 === 0.3;                     // false!
0.1.toFixed(20);                       // "0.10000000000000000555"
// 解决: toFixed(n)、乘10^n再除、Number.EPSILON

// NaN 和 Infinity
isNaN(value);        // 全局 — 先转数字再判断（有坑）
Number.isNaN(value); // ES6 — 严格的 NaN 判断
isFinite(value);     // 检查是否常规数字（NaN/Infinity 返回 false）

// parseInt / parseFloat
parseInt("100px");       // 100
parseFloat("12.5em");    // 12.5
parseInt("0xFF");        // 255

// 其他 Math 方法
Math.round/floor/ceil/trunc
Math.random()            // [0, 1)
Math.max(a, b, ...) / Math.min(a, b, ...)
Math.pow(n, power)
```

## 字符串

```js
let str = "Hello";

// 索引和长度
str[0]; str.charAt(0); str.length;

// 大小写
str.toUpperCase(); str.toLowerCase();

// 搜索
str.indexOf("lo");          // 3（未找到返回 -1）
str.lastIndexOf("l");       // 3
str.includes("Hello");      // true (ES6)
str.startsWith("He");       // true (ES6)
str.endsWith("lo");         // true (ES6)

// 获取子串
str.slice(1, 4);            // "ell"  (支持负数)
str.substring(1, 4);        // "ell"  (不支持负数)
str.substr(1, 3);           // "ell"  (已废弃)

// 比较
"a" > "Z";                  // true（Unicode码点比较）
"a".codePointAt(0);         // 97
String.fromCodePoint(97);   // "a"
"a".localeCompare("b");     // -1 (支持语言敏感的排序)

// 修剪空白
"  Hello  ".trim();         // "Hello" (ES5)
```
- 字符串不可变：任何"修改"操作都返回新字符串

## 数组

```js
let arr = [1, 2, 3];

// 栈/队列操作（改变原数组）
arr.push(4);          // [1,2,3,4]  末尾添加
arr.pop();            // [1,2,3]    末尾删除，返回被删元素
arr.shift();          // [2,3]      开头删除
arr.unshift(0);       // [0,2,3]    开头添加

// 内部结构
delete arr[1];        // 留下空位！arr → [1, empty, 3]
arr.splice(1, 1);     // 正确删除（从索引1删除1个）

// 切片与合并
arr.slice(1, 3);      // [2, 3]  浅拷贝（不改变原数组）
arr.concat([4,5]);    // [1,2,3,4,5]

// 搜索
arr.indexOf(2);       // 1（严格相等 ===）
arr.includes(2);      // true (ES6)
arr.find(fn);         // 返回第一个满足条件的元素 (ES6)
arr.findIndex(fn);    // 返回索引 (ES6)
arr.filter(fn);       // 返回所有满足条件的新数组
```

## 数组迭代方法

```js
arr.forEach((item, index, array) => {});     // 遍历执行

// 转换
let result = arr.map(fn);           // 映射为新数组
let result = arr.filter(fn);        // 过滤
let value = arr.reduce((acc, cur) => acc + cur, 0); // 归约
let value = arr.reduceRight(fn);    // 从右归约

// 测试
arr.every(fn);     // 全部满足? → boolean
arr.some(fn);      // 任一满足? → boolean

// 排序（改变原数组！）
arr.sort((a, b) => a - b);  // 数值升序
arr.reverse();              // 反转

// 转换
arr.join(', ');             // "1, 2, 3"
Array.isArray(arr);         // true（比 instanceof Array 更可靠）

// ES2019+
arr.flat(depth);            // 展平嵌套数组
arr.flatMap(fn);            // map + flat(1)
```

## 可迭代对象 (Iterable)

```js
// Symbol.iterator 使对象可迭代
let range = {
  from: 1, to: 5,
  [Symbol.iterator]() { /* 返回迭代器 */ }
};

// Array.from — 从可迭代/类数组创建真数组
Array.from("hello");          // ['h','e','l','l','o']
Array.from(range);            // [1,2,3,4,5]
Array.from(obj, fn);          // 可传入映射函数
```

## Map

```js
let map = new Map();
map.set('key', 'value');
map.get('key');
map.has('key');
map.delete('key');
map.size;
map.clear();

// 链式调用
map.set('a', 1).set('b', 2).set('c', 3);

// 迭代
for (let [key, value] of map) {}
map.keys(); map.values(); map.entries();
map.forEach((value, key) => {});

// 从对象创建
new Map(Object.entries(obj));

// 转回对象
Object.fromEntries(map);  // ES2019
```
- Map 的键可以是任何类型（对象也可以），而普通对象的键只能是 string/symbol
- Map 保持插入顺序

## Set

```js
let set = new Set();
set.add(value);
set.delete(value);
set.has(value);
set.size;
set.clear();

// 唯一值数组
let unique = [...new Set([1,1,2,2,3])]; // [1,2,3]

// 迭代
for (let value of set) {}
set.forEach((value, valueAgain) => {}); // 为与 Map 兼容
```

## WeakMap / WeakSet

- 键必须是对象，弱引用（不阻止GC）
- 不可迭代，无 size/clear
- WeakMap 用途：存储额外数据、缓存、私有数据
- WeakSet 用途：标记/追踪对象（如"是否已访问"）

## Date

```js
new Date();                          // 当前
new Date(milliseconds);              // 从1970-01-01偏移
new Date("2024-01-01");              // 解析字符串
new Date(year, month, day, ...);     // month 从 0 开始！

// 获取组件
date.getFullYear(); date.getMonth();    // month: 0-11!
date.getDate();   date.getHours(); date.getMinutes(); date.getSeconds();
date.getDay();    // 星期(0=周日)
date.getTime();   // 时间戳(ms)

// 设置组件（对应 set* 方法）
date.setFullYear(2025);

// 时间戳
Date.now();  // 当前时间戳，比 new Date().getTime() 快
```

## JSON

```js
// 序列化
JSON.stringify(value, replacer?, space?);

// 解析
JSON.parse(str, reviver?);

// 自定义 toJSON
let obj = {
  date: new Date(),
  toJSON() { return this.date.getTime(); }
};
```
- 忽略：函数、Symbol、undefined（在数组中变 null）
- 不支持循环引用
- Date 自动转为 ISO 字符串，解析时不自动还原为 Date（需 reviver）
