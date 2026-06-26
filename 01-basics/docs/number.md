JavaScript 中的所有数字都以 64 位格式 IEEE-754 存储，也称为“双精度”。在 js 内部，一个数字以 64 位格式 IEEE-754 表示，所以正好有 64 位可以存储一个数字：其中 52 个被使用存储这些数字，其中 11 个存储小数点的位置（它们对于整数为零），1 位用于符号。

科学计数法e后表示0的个数 1.23e-6 = 1.23 * 1 / 1000000

十六进制： 0x
二进制：0b
八进制：0o
其他进制可以使用parseInt(string, ?radix)转换
toString(base)

四舍五入
1. Math.floor 向下取整
2. Math.ceil 向上取整
3. Math.round 向最近的整数取整
5. Math.trunc 丢掉小数部分
6. Math.random() 返回从 0 到 1 的随机数（不包括 1）
7. Math.power(n, powe) 返回 n 的 power 次幂，即 npower
6. toFixed(n) 将点数后的数字四舍五入到 n 个数字并返回结果的字符串表示。如果小数部分比所需要的短，则在结尾添加零。

1. isFinite() 将其参数转换为数字，如果是常规数字，则返回 true，而不是 NaN / Infinity / -Infinity。所有数字函数（包括 isFinite）中的空字符串或空格字符串均被视为 0。
2. isNaN() 将其参数转换为数字，然后测试它是否为 NaN
3. Object.is() 它可以比较 === 等值，但对于两种边缘情况更可靠：
+ 它适用于 NaN： Object.is（NaN，NaN）=== true。
+ 值 0 和 -0 是不同的：Object.is（0，-0）=== false。

+ 使用加号 + 或 Number() 的数字转换是严格的。如果一个值不完全是一个数字，就会失败。唯一的例外是字符串开头或结尾的空格，因为它们会被忽略。
+ parseInt/parseFloat 从字符串中“读出”一个数字，直到他们可以。如果发生错误，则返回收集的数字。函数 parseInt 返回一个整数，而 parseFloat 将返回一个浮点数
