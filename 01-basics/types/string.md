# 字符串

类似字符数组,具有类似数组的一部分方法。
字符串是不可变值，不能借用数组中的不可变方法。

[esrever](https://github.com/mathiasbynens/esrever/blob/master/esrever.js)

## 数值

js中没有真正意义上的整数
基于IEEE 754标准实现。

小数点前的0或数值最后的0可以省略
toExponential() 指数形式显示数值
toFixed() 指定小数部分显示的位数
toPrecision() 指定有效位的显示位数

```javascript
42..toFixed(3)
0.42.toFixed(3)
42 .toFixed(3)
42.toFixed(3) // 语法错误
+'-0' // => -0
Number("-0") // => -0
JSON.parse("-0") // => -0
JSON.stringify(-0) // => 0
```

0开头的数值在非严格模式会被识别成八进制，因此需要明确指定数值进制前缀。

由于某些小数无法精确表示因此比较两个带小数的数值通常放大成整处理后再缩小回去或设置一个误差范围，可以直接使用Number.EPSILON(2^-52)。

## 数值常量

- Number.MAX_VALUE
- Number.MIN_VALUE
- Number.MAX_SAFE_INTEGER 2^53-1
- Number.MIN_SAFE_INTEGER
- NaN 无效的数值 它和自身不相等
- Infinity/-Infinity 从有穷可以到无穷，但无法从无穷回到有穷

Number.isNaN()
Infinity/Infinity => NaN

## 整数检测

Number.isInteger()
Number.isSaveInteger()

## 32位有符号整数

位运算会将数值转换到32位整数

## null/undefined

null 空值,没有引用类型的值 是一个关键字
undefined 没有值或未赋值, 全局标识符
void 运算符 并不改变表达式结果，只让表达式不返回值 求值为undefined

## 判断值是否相等

Object.is()  // -0与0不相等

## 值和引用

JavaScript对值和引用的赋值/传递在语法上没有区别，完全根据值的类型决定。(无法自行决定使用值复制还是引用复制)
原始类型的值总是通过复制的方式来赋值/传递，引用类型的值总是通过引用复制的方式来赋值/传递。
引用指向值本身而非变量，所以一个引用无法改变另外一个引用的指向。
JavaScript中的引用与其他语言中的引用和指针不同，它不能指向别的变量/引用，`只能指向值`。
