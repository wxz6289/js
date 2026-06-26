基本类型
+ 是原始类型中的一种值。
+ 在 JavaScript 中有 6 种基本类型：string、number、boolean、symbol、null 和 undefined。
+ JavaScript 允许访问字符串，数字，布尔值和符号的方法和属性。
+ 当进行访问时，创建一个特殊的“包装对象”，它提供额外的功能，运行后即被销毁。JavaScript 引擎高度优化了这个过程。它甚至可能跳过创建额外的对象。

构造函数 String/Number/Boolean 仅供内部使用,不使用 new 的 String/Number/Boolean 是一个明智的选择。它们将一个值转换为相应的类型：转成 string，number，或 boolean（原始类型)。
特殊的基本类型 null 和 undefined 是个例外。他们没有相应的“包装对象”，也没有提供任何方法。

对象类型
+ 能够存储多个值作为属性。
+ 可以使用大括号{}创建对象。