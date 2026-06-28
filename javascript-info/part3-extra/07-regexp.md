# 3.7 正则表达式

## 创建

```js
let re1 = /pattern/flags;         // 字面量（编译一次，性能好）
let re2 = new RegExp('pattern', 'flags'); // 构造函数（动态模式）
```

## 标志 (Flags)

| 标志 | 含义 |
|------|------|
| `i` | 忽略大小写 |
| `g` | 全局匹配（找所有匹配） |
| `m` | 多行模式 — `^` 和 `$` 匹配每行的开头和结尾 |
| `s` | dotAll — `.` 匹配换行符 `\n` |
| `u` | Unicode — 正确处理 4 字节字符 |
| `y` | 粘滞 — 从 `lastIndex` 位置匹配 |

## 字符类

| 类 | 含义 |
|------|------|
| `\d` | 数字 [0-9] |
| `\D` | 非数字 |
| `\w` | 单词字符 [a-zA-Z0-9_] |
| `\W` | 非单词字符 |
| `\s` | 空白（空格、tab、换行） |
| `\S` | 非空白 |
| `.` | 除 `\n` 外的任意字符（s 标志包含 `\n`） |

## 量词

| 量词 | 含义 |
|------|------|
| `{n}` | 恰好 n 个 |
| `{n,m}` | n 到 m 个 |
| `{n,}` | 至少 n 个 |
| `+` | 至少 1 个 (= {1,}) |
| `*` | 0 个或多个 (= {0,}) |
| `?` | 0 个或 1 个 (= {0,1}) |

**贪婪模式**（默认）：尽可能多匹配。`\d+` 尽可能多地匹配数字  
**懒惰模式**：加 `?`，尽可能少匹配。`\d+?` 尽可能少地匹配数字

## 锚点

| 锚点 | 含义 |
|------|------|
| `^` | 字符串开头（m 标志：行开头） |
| `$` | 字符串结尾（m 标志：行结尾） |
| `\b` | 单词边界 |
| `\B` | 非单词边界 |

## 组

```js
// 捕获组 ( )
let match = "John Smith".match(/(\w+) (\w+)/);
match[0]; // "John Smith" — 完整匹配
match[1]; // "John" — 第一个组
match[2]; // "Smith" — 第二个组

// 命名组 (?<name>...)
let m = "John Smith".match(/(?<first>\w+) (?<last>\w+)/);
m.groups.first; // "John"
m.groups.last;  // "Smith"

// 非捕获组 (?: )
/(?:https?):\/\/(.+)/  // 不捕获协议部分

// 反向引用
/(['"])(.*?)\1/   // \1 引用第一个组的内容（匹配成对的引号）
/\k<name>/        // 通过名称引用

// 前瞻 (Lookahead)
/x(?=y)/   // 正向前瞻：x 后面是 y
/x(?!y)/   // 负向前瞻：x 后面不是 y

// 后顾 (Lookbehind) — ES2018
/(?<=y)x/   // 正向后顾：x 前面是 y
/(?<!y)x/   // 负向后顾：x 前面不是 y
```

## 方法

### 搜索
```js
let result = str.match(/pattern/);     // 返回匹配数组或 null
// 带 g 标志返回所有匹配的数组（不含捕获组）
// 不带 g 返回第一个匹配 + 捕获组 + index + input

let result = str.matchAll(/pattern/g); // 返回迭代器（含捕获组）
for (let m of result) { m[1]; }

let index = str.search(/pattern/);     // 返回首次匹配的索引（-1 未找到）
let result = regexp.test(str);         // true/false
```

### 替换
```js
let result = str.replace(/pattern/g, 'replacement');
// 特殊字符: $& 完整匹配, $1 第一组, $` 匹配前, $' 匹配后

// 函数替换
str.replace(/pattern/g, (match, p1, p2, offset, str) => {
  return `replaced-${p1}`;
});
str.replaceAll('search', 'replace');  // ES2021
```

### 拆分
```js
str.split(/[,.\s]+/);
```

## 正则方法 (RegExp)

```js
let regexp = /pattern/g;
regexp.lastIndex;    // 下次匹配起始位置（仅 g 或 y 标志）
regexp.exec(str);    // 返回匹配或 null，更新 lastIndex
```

## 常见模式

```js
// 邮箱
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// URL
/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b/

// 密码强度（至少8位，含大小写字母+数字）
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

// 中文
/[一-鿿]/

// HTML 标签
/<[^>]+>/g

// 数字千分位格式化
"1234567890".replace(/\B(?=(\d{3})+(?!\d))/g, ",")  // "1,234,567,890"
```

## 粘滞模式 (y 标志) 与全局 (g) 的区别

```js
let str = "let varName";
let re1 = /\w+/g;
let re2 = /\w+/y;

re1.exec(str); // ["let"]   lastIndex=3
re1.exec(str); // ["varName"] 全局模式从索引3继续找

re2.exec(str); // ["let"]   lastIndex=3
re2.exec(str); // null    粘滞模式必须从索引3精确匹配（但那里是空格！）
// y 标志: 从 lastIndex 开始必须立即匹配，否则返回 null
```
