1. JSON.stringify(value [, replacer, space])
2. JSON.parse(str [, reviver])

JSON 编码的对象与对象字面量的重要的区别：
+ 字符串使用双引号。JSON 中没有单引号或反引号。
+ 对象属性名称也是双引号的。这是强制性的。
+ 不支持注释

JSON.stringify 也可以应用于基本类型。
原生支持的 JSON 类型是：
+ Objects { ... }
+ Arrays [ ... ]
+ Primitives:
    + strings,
    + numbers,
    + boolean values true/false,
    + null.
JSON 是跨语言的纯数据规范，因此一些特定于 JavaScript 的对象属性被 JSON.stringify 跳过。如：
+ 函数属性（方法）。
+ Symbolic 属性。
+ 存储 undefined 的属性。

嵌套对象可以自动支持和转换。
重要的限制：不得有循环引用。

定制 “toJSON”
像 toString 进行字符串转换，对象可以提供 toJSON 方法来进行 JSON 转换。如果可用，JSON.stringify 会自动调用它。