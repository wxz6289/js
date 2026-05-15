字符串可以包含在单引号、双引号或反引号中,但是反引号允许我们将任何表达式嵌入到字符串中，包括函数调用，并且允许字符串跨行。此外，反引号还允许我们在第一个反引号之前指定一个“模版函数”。语法是：func`string`。函数 func 被自动调用，接收字符串和嵌入式表达式，并处理它们。

转义字符 以反斜杠字符`\`开始

字符串长度 length属性
访问字符 
1. str.charAt(pos) 从0开始 如果没有找到字符返回空字符串
2. 方括号 如果没有字符返回undefined
3. 可以使用for..of遍历字符

字符串不可变 
改变大小写
1. toUpperCase()
2. toLowerCase()

查找子字符串
1. str.indexOf(substr, pos)
2. str.lastIndexOf(substr, pos)
位运算技巧 ～n = -(n+1)  => ~(-1) = 0
3. str.includes(substr, pos)
4. str.startsWith(substr)
5. str.endsWith(substr)

获取子串
1. str.slice(start [, end])
2. str.substring(start, [, end])
3. str.substr(start [,length])

比较字符串
1. str.codePointAt(pos)
2. String.fromCodePoint(code)
3. str.localeCompare(str2)
4. str.fromCharCode()
5. str.charCodeAt(pos)
6. str.normalize()

其他
1. trim()
2. repeat()
