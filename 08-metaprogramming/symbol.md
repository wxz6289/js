“Symbol” 值表示唯一的标识符。可以使用Symbol()来创建这种类型的值,调用带有一个可选的描述。Symbol 总是不同的值，即使它们有相同的名称。JavaScript中的大多数值都支持string的隐式转换。Symbol是特别的，它无法自动转换。
Symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能偶尔访问或重写这些属性。
Symbolic 属性不参与 for..in 循环。

+ Symbol.for(key) 为了在注册表中创建或读取 Symbol，请使用 Symbol.for(key)。该调用会检查全局注册表，如果有一个描述为 key 的 Symbol，则返回该 Symbol，否则将创建一个新 Symbol（Symbol(key)），并通过给定的 key 将其存储在注册表中。
+ Symbol.keyFor(sym) 在内部使用全局 symbol 注册表来查找 symbol 的键。所以它不适用于非全局 symbol。如果 symbol 不是全局的，它将无法找到它并返回 undefined。

系统Symbol
+ Symbol.hasInstance
+ Symbol.isConcatSpreadable
+ Symbol.iterator
+ Symbol.toPrimitive  允许我们将对象描述为原始值转换

应用场景：
+ “隐藏” 对象属性；
+ 通过系统Symbol来改变一些内置行为。

 Object.getOwnPropertySymbols(obj) 允许我们获取所有的 Symbol。
 Reflect.ownKeys(obj) 返回所有键，包括 Symbol。