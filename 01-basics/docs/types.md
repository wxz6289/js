# JavaScript 类型

类型定义了值的行为特征，以区别于其他值。在 JavaScript 中，**变量没有类型，只有值才有**；变量可以随时持有任何类型的值。

---

## 1. 内置类型

JavaScript 内置类型如下：

| 类型 | 说明 |
|------|------|
| `null` | 空值 |
| `undefined` | 未定义 |
| `boolean` | 布尔值 |
| `number` | 数字（IEEE-754 双精度浮点） |
| `string` | 字符串 |
| `symbol` | 唯一标识符（ES6） |
| `bigint` | 大整数（ES2020） |
| `object` | 对象（含数组、函数等） |

### 基本类型与对象类型

**基本类型**（原始类型）是标量值，共 8 种：`string`、`number`、`boolean`、`symbol`、`bigint`、`null`、`undefined`，以及 ES 规范中的 object 以外的原始值。

- 基本类型的值本身没有属性和方法；访问 `.length` 等方法时，引擎会临时创建**包装对象**，用完后销毁。
- `String()` / `Number()` / `Boolean()` 不用 `new` 调用，可将值转为对应基本类型。
- `null` 和 `undefined` 没有包装对象，也没有实例方法。

**对象类型**能存储多个值作为属性，用 `{}` 创建对象。

### 类型判断

- **`typeof`**：检测值的类型，但字符串结果并不完全对应上述八种（如 `typeof null === "object"`）。对**未声明**的变量或属性有安全防范机制，返回 `"undefined"` 而不抛错。
- **`instanceof`**：检测对象的原型链。
- **`Object.prototype.toString.call(value)`**：查看值的内部 `[[Class]]` 属性，结果更精确。

### undefined 与 undeclared

| 概念 | 含义 |
|------|------|
| `undefined` | 变量已声明，但未赋值 |
| undeclared | 变量未声明 |

`typeof` 对 undeclared 变量也返回 `"undefined"`，这是语言内置的安全机制。检测全局对象上的属性存在性，也可作为类似的防范手段。

---

## 2. Number

JavaScript 中所有数字以 64 位 **IEEE-754 双精度**格式存储：52 位存有效数字，11 位存指数，1 位存符号。

### 字面量与进制

- 科学计数法：`1.23e-6` = `1.23 × 10⁻⁶`
- 十六进制：`0xFF`
- 二进制：`0b1010`
- 八进制：`0o17`
- 其他进制：`parseInt(string, radix)` 或 `num.toString(base)`

### 取整与随机

| 方法 | 作用 |
|------|------|
| `Math.floor` | 向下取整 |
| `Math.ceil` | 向上取整 |
| `Math.round` | 四舍五入到最近整数 |
| `Math.trunc` | 截断小数部分 |
| `Math.random()` | `[0, 1)` 随机数 |
| `Math.pow(n, power)` | n 的 power 次幂 |
| `num.toFixed(n)` | 四舍五入到 n 位小数，返回字符串 |

### 检测与比较

- **`isFinite(x)`**：转为数字后是否为常规有限数（空字符串视为 0）。
- **`isNaN(x)`**：转为数字后是否为 `NaN`。
- **`Object.is(a, b)`**：类似 `===`，但 `NaN === NaN` 为 true，且 `-0` 与 `+0` 不相等。

### 字符串转数字

- **`Number()` / 一元 `+`**：严格转换；含非数字字符（首尾空格除外）则得 `NaN`。
- **`parseInt` / `parseFloat`**：从左到右解析，遇非法字符停止并返回已解析部分；适合「字符串右侧有多余字符但前缀是数字」的场景。

```javascript
Number("  42  ");   // 42
Number("42px");     // NaN
parseInt("42px");   // 42
```

---

## 3. String

### 字面量

字符串可用单引号、双引号或反引号包裹。反引号支持：

- 跨行书写
- 嵌入表达式：`` `hello ${name}` ``
- 标签模板：`` func`string` ``（`func` 自动接收字符串片段与表达式）

转义字符以 `\` 开头。

### 特性

- **不可变**：修改操作返回新字符串。
- **类数组**：有 `length`，可按索引访问，部分数组方法可用（如 `indexOf`、`concat`）。

### 访问字符

| 方式 | 未找到时 |
|------|----------|
| `str.charAt(pos)` | 返回 `""` |
| `str[pos]` | 返回 `undefined` |
| `for..of` | 按 Unicode 码点遍历 |

### 常用 API

**大小写**：`toUpperCase()`、`toLowerCase()`

**查找子串**：

- `indexOf(substr, pos)` / `lastIndexOf(substr, pos)`
- `includes(substr, pos)` / `startsWith(substr)` / `endsWith(substr)`
- 技巧：`~str.indexOf(x)` 等价于 `str.indexOf(x) !== -1`（因 `~n === -(n+1)`，故 `~(-1) === 0`）

**截取**：`slice(start [, end])`、`substring(start [, end])`、`substr(start [, length])`

**比较与编码**：`localeCompare`、`codePointAt`、`charCodeAt`、`String.fromCodePoint`、`String.fromCharCode`、`normalize`

**其他**：`trim()`、`repeat()`

---

## 4. Boolean、Symbol 与其他原始类型

### Symbol

- 表示唯一的标量值，常用于不易冲突的对象属性名。
- **不能**用 `new Symbol()` 调用。
- ES6 预定义符号以 `Symbol.xxx` 静态属性形式存在。
- 获取对象上所有 Symbol 属性：`Object.getOwnPropertySymbols(obj)`

### null 与 undefined

在 `==` 比较中，`null == undefined` 为 `true`，二者与其他值均不相等。

---

## 5. 数组

与其他强类型语言不同，JavaScript 数组可存储任意类型，也可预先设定 `length`。

```javascript
Array(3);       // 创建长度为 3 的空槽数组（非 [3]）
Array.from(x);  // 将类数组或可迭代对象转为真数组
```

### 注意事项

- `delete arr[i]` 删除元素后，`length` **不变**。
- 数字索引与可转为整数的字符串键等价，会影响 `length`；其他字符串键则不会。
- **稀疏数组**：过半位置为空的数组。
- **类数组**：有 `length` 且可按数字索引访问，但不是数组（如 `arguments`、字符串）。

---

## 6. Date

### 创建

```javascript
new Date();                          // 当前时间
new Date(milliseconds);              // 时间戳（毫秒）
new Date(dateString);                // 日期字符串
new Date(year, month [, date, h, m, s, ms]);  // 本地时区，month 从 0 起
```

注意：

- `year` 须为四位数；`month` 从 0（一月）到 11（十二月）。
- 缺省 `date` 为 1，缺省时分秒毫秒为 0。
- 时间戳单位为**毫秒**；`Date.now()` 等价于 `new Date().getTime()`，且更高效。

### 访问与设置

- 本地：`getFullYear()`、`getMonth()`、`getDate()`、`getHours()` 等；对应 `setXxx()`。
- UTC：`getUTCXxx()` / `setUTCXxx()`。
- `getDay()`：星期几，0 为周日。
- `getTime()` / `setTime(ms)`：基于 UTC，无单独 UTC 版本。

### 解析

`Date.parse(str)` 解析 ISO 8601 格式（如 `YYYY-MM-DDTHH:mm:ss.sssZ`），返回毫秒时间戳；格式错误返回 `NaN`。

两个 `Date` 相减得到间隔毫秒数。

---

## 7. 原生函数与封装对象

原生（内建）函数大多可作构造函数，但 **没有** `null` / `undefined` 对应的构造函数。

| 函数 | 说明 |
|------|------|
| `String()` / `Number()` / `Boolean()` | 类型转换（不用 `new`） |
| `Symbol()` | 创建符号（不用 `new`） |
| `Array()` / `Object()` / `Function()` / `RegExp()` | 一般避免直接调用；动态构建正则或函数时后两者有用 |
| `Date()` / `Error()` | 无字面量形式，通常 `new Date(...)` / `new Error(...)` |
| `Date.now()` | 静态方法，取当前毫秒时间戳 |

**Error** 对象含只读 `stack`（调用栈与行号）和 `message`；用 `toString()` 获取格式化信息。

**封装与拆封**：基本类型访问属性时引擎自动装箱；手动 `new String()` 等会降低性能。拆封用 `valueOf()`。

**原生原型**：各构造函数有 `prototype`，存放子类型特有行为；一般不要修改。

---

## 8. 类型转换

类型转换是将值从一种类型变为另一种类型的过程。

| 术语 | 含义 |
|------|------|
| 显式转换 | 代码中可直接看出，如 `Number(x)`、`String(x)` |
| 隐式转换（强制转换） | 由运算或比较触发的副作用，不明显 |

强制转换发生在运行时，结果通常是**标量基本类型**（字符串、数字、布尔值），而非对象或函数。

### 抽象操作 ToString

| 输入 | 结果 |
|------|------|
| `null` | `"null"` |
| `undefined` | `"undefined"` |
| `true` / `false` | `"true"` / `"false"` |
| `object` | `object.toString()` |

**Symbol**：可显式转字符串；隐式转字符串会报错。

**Symbol 转数字**：显式与隐式均报错。

**Symbol 转布尔**：显式与隐式均为 `true`。

### 运算符 `+`

| 形式 | 行为 |
|------|------|
| `+x` | 一元运算，将 x 转为数字 |
| `a + b`（至少一个为字符串） | 字符串拼接 |
| `a + b`（均为数字或布尔） | 加法 |

```javascript
2 + null;       // 2
2 + undefined;  // NaN
[] + {};        // "[object Object]"
{} + [];        // 0（{} 被解析为块，+[] 为 0）
```

### 运算符 `-`

- 一元 `-x`：转为数字后取负。
- 双一元 `- -x` 中间需空格，否则 `--` 被解析为递减运算符。

```javascript
+"-12";    // -12（先转数字）
- "-12";   // 12
- -"-12";  // -12
```

---

## 9. JSON

JSON 是跨语言的纯数据规范，JavaScript 通过 `JSON.stringify` / `JSON.parse` 与之交互。

### 支持的数据

- 对象 `{ ... }`、数组 `[ ... ]`
- 原始值：`string`、`number`、`boolean`、`null`

### 与对象字面量的区别

- 键名和字符串值均须**双引号**（无单引号、反引号）
- 不支持注释、正则、函数、Symbol、`undefined`

### stringify 行为

- 简单值与 `ToString` 类似，但字符串会带双引号。
- 顶层遇到 `undefined` / `function` / `symbol` 返回 `undefined`。
- 对象属性中为上述值时**忽略**；数组中对应位置为 `null`（保持索引）。
- **循环引用**会抛错。
- 若对象有 `toJSON()` 方法，会先调用其返回值再序列化。

### parse

`JSON.parse(str [, reviver])` 将 JSON 字符串解析为 JavaScript 值。

---

## 10. 相等性

```javascript
Object.is(NaN, NaN);   // true
Object.is(0, -0);        // false
Object.is(5, 5);         // true
```

`==` 会进行类型强制转换；`null == undefined` 为 true。生产代码中更推荐 `===` 与 `Object.is`。

---

## 11. 值与引用

JavaScript 在语法上不区分值复制与引用复制，完全由值的类型决定：

| 类型 | 赋值 / 传参方式 |
|------|-----------------|
| 原始类型 | 按值复制 |
| 对象（引用类型） | 按引用复制（复制的是引用，指向同一对象） |

引用指向**值**而非变量；一个引用不能改变另一个引用的指向。JavaScript 的引用不同于 C 指针——**只能指向值**，不能指向变量或其他引用。
