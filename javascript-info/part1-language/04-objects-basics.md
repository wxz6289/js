# 1.4 对象：基础知识

## 对象创建与属性

```js
let user = new Object();    // 构造函数语法
let user = {};              // 字面量语法（推荐）

let user = {
  name: "John",
  age: 30,
  "likes birds": true,      // 多词属性名需要引号
};

// 属性访问
user.name;                   // 点号访问
user["likes birds"];         // 方括号（支持变量和表达式）
let key = "name"; user[key]; // 动态属性名

// 计算属性 (ES6)
let fruit = "apple";
let bag = { [fruit]: 5 };    // { apple: 5 }

// 属性简写 (ES6)
function makeUser(name, age) {
  return { name, age };      // { name: name, age: age }
}
```

## 属性操作

```js
user.isAdmin = true;         // 添加
delete user.age;             // 删除
"age" in user;               // 检查是否存在（含继承）
user.hasOwnProperty("age");  // 仅检查自身属性
```

## 对象遍历

```js
for (let key in obj) {}       // 遍历所有可枚举属性（含继承）
Object.keys(obj)              // 自身可枚举属性名数组
Object.values(obj)            // 自身可枚举属性值数组
Object.entries(obj)           // 自身可枚举 [key,value] 数组
```

**遍历顺序**：整数属性按升序，字符串属性按创建顺序。

## 对象引用与复制

```js
let a = {};
let b = a;           // b 是 a 的引用，指向同一个对象

// 浅拷贝
let clone = Object.assign({}, obj);
let clone2 = { ...obj };

// 深拷贝
let deep = structuredClone(obj);  // 现代方法（不复制函数）
// 或 JSON.parse(JSON.stringify(obj))（丢失函数/Symbol/Date等）
```

## 垃圾回收 (Garbage Collection)

- 基本算法：**Mark-and-sweep（标记-清除）**
- 从根对象(roots)出发，标记所有可达对象，清除不可达对象
- 根对象包括：全局对象、当前执行函数的局部变量/参数、DOM 节点
- 内部算法优化：分代收集（新对象→老对象）、增量收集、闲时收集

## 构造器和 new

```js
function User(name) {
  // this = {};  （隐式创建）
  this.name = name;
  // return this; （隐式返回）
}
let user = new User("John");
```

new 操作符执行的步骤：
1. 创建空对象
2. 设置 `[[Prototype]]` 为构造函数的 `prototype`
3. 以新对象为 this 执行构造函数
4. 返回 this（若构造函数返回对象则返回该对象）

```js
// new.target — 检测是否通过 new 调用
function User() {
  if (!new.target) return new User();
}
```

## 可选链 ?. (ES2020)

```js
user?.address?.street;     // user或address为null/undefined时返回undefined
obj?.[key];                // 可选属性访问
fn?.();                    // 可选函数调用
```
- 短路：`?.` 左侧为 null/undefined 时立即停止
- 不能用于赋值左侧：`user?.name = "John"` → 语法错误

## Symbol 类型

```js
let id = Symbol("id");             // 唯一标识符
let id2 = Symbol("id");            // id !== id2
let globalId = Symbol.for("id");   // 全局 Symbol，可跨 realm 共享
Symbol.keyFor(globalId);           // "id"
```
- 用作"隐藏"属性，不会在 for/in 中被枚举
- 会被 Object.assign 和展开运算符复制
- Well-known symbols 自定义语言行为
