类是一种函数。

1. 调用类的构造器必须要用`new`关键字
2. 类方法不可枚举
3. 类默认使用`use strict`

类表达式 可以像函数一样被传递、返回、赋值等。

- 类方法
- 访问器属性
- 计算属性
- 类字段 存在于对象实例中

类字段的初始化顺序：

- 对于基类，在构造函数调用前初始化；
- 对于派生类，在 super()后立刻初始化。

使用类字段制作绑定方法
JavaScript 中的函数具有动态的 this。它取决于调用上下文。因此，如果一个对象方法被传递到某处，或者在另一个上下文中被调用，则 this 将不再是对其对象的引用。

在 extends 后允许任意表达。

类级别属性不在 Class.prototype 内。相反它是通过 new 分别为每个对象创建的。所以，该属性永远不会在同一个类的不同对象之间共享。而 methods，getters 和 settors 都被写入 Class.prototype。

[[HomeObject]]
当一个函数被定义为类或者对象方法时，它的 [[HomeObject]] 属性就成为那个对象。然后 super 使用它来解析父类原型和它自己的方法。
通常函数都是 “自由” 的，并没有绑定到 JavaScript 中的对象。正因如此，它们可以在对象之间复制，并且用另外一个 this 调用它。
[[HomeObject]] 的存在违反了这个原则，因为方法记住了它们的对象。[[HomeObject]] 不能被修改，所以这个绑定是永久的。
在 JavaScript 语言中 [[HomeObject]] 仅被用于 `super`。所以，如果一个方法不使用 super，那么我们仍然可以视它为自由的并且可在对象之间复制。但是在 super 中可能出错。

[[HomeObject]] 是为类和普通对象中的方法定义的。但是对于对象来说，方法必须确切指定为 method()，而不是 "method: function()"。将一个带有 super 的方法从一个对象复制到另一个对象是不安全的。
**方法，不是函数属性**

1. 扩展类：class Child extends Parent：
   - 这就意味着 Child.prototype.**proto** 将是 Parent.prototype，所以方法被继承。
2. 重写构造函数：
   - 在构造方法中使用 this 之前，必须先调用 super()。super()只能在构造函数中调用。
3. 重写方法：
   - 我们可以在 Child 方法中使用 super.method() 来调用 Parent 方法。
4. 内部工作： + 方法在内部 [[HomeObject]] 属性中记住它们的类/对象。这就是 super 如何解析父类方法的。 + 因此，将一个带有 super 的方法从一个对象复制到另一个对象是不安全的。
   补充：

- 箭头函数没有自己的 this 和 super，所以它们能融入到就近的上下文。

派生构造器具有特殊的内部属性 [[ConstructorKind]]:"derived"。这个特殊的内部属性标签会影响它的 new 行为：当通过 new 执行一个常规函数时，它将创建一个空对象，并将这个空对象赋值给 this。但是当继承的 constructor 执行时，它不会执行此操作。它期望父类的 constructor 来完成这项工作。因此，派生的 constructor 必须调用 super 才能执行其父类（base）的 constructor，否则 this 指向的那个对象将不会被创建。
如果一个类扩展了另一个类并且没有 constructor，那么将生成一个调用了父类构造函数的“空” constructor。

-

类静态方法通常用于实现整个类的功能，与具体的实例无关，并不需要实例存在，它属于类。
类静态属性用于存储类级别的数据，而不是绑定到实例。
静态方法和静态属性是可以继承的。

方法和属性
public
private

instanceof 操作符用于检测对象是否属于某个 class，同时，检测过程中也会将继承关系考虑在内。
这种检测在多数情况下还是比较有用的，可以用它来构建一个具备 多态 性的函数，这个函数能识别出参数类型，从而作出不同的处理。
obj instanceof Class 语句的大致执行过程如下：

1. 如果提供了静态方法 Symbol.hasInstance，那就直接用这个方法进行检测
2. 大部分的类是没有 Symbol.hasInstance 方法的，这时会检查 Class.prototype 是否与 obj 的原型链中的任何一个原型相等。

Symbol.hasInstance(obj)

objA.isPrototypeOf(objB) 如果 objA 处在 objB 的原型链中，调用结果为 true。所以，obj instanceof Class 也可以被视作为是调用 Class.prototype.isPrototypeOf(obj)。
其实 Class 的构造器自身是不参与检测的！检测过程只和原型链以及 Class.prototype 有关。
总之，按照 instanceof 的逻辑，真正决定类型的是 prototype，而不是构造函数。

内置的 toString 方法可以从对象中提取出来，以其他值作为上下文（context）对象进行调用，调用结果取决于传入的上下文对象。

对象的 toString 方法可以使用 Symbol.toStringTag 这个特殊的对象属性进行自定义输出。大部分和环境相关的对象也有这个属性。

类型检测的几种方式
| 用于 | 返回 |
|:----:|:-----|:----:|
| typeof | 基本数据类型 | string |  
| {}.toString | 基本数据类型、内置对象以及包含 Symbol.toStringTag 属性的对象 |string |  
| instanceof | 任意对象 | true/false |

class 创建的构造函数与普通构造函数的不同：

- class 创建的函数具有特殊的内部属性标记`[[IsClassConstructor]]: true`。必须是要`new`来调用。在引擎中类构造器的的字符串表示都是以 class 开头。

- 类方法不可枚举。
- 类总是使用`use strict`。

扩展内建类
扩展类时可以添加 static get [Symbol.species]属性，来改变方法创建实例的 constructor。

内建类没有静态方法继承。
内建对象有它们自己的静态方法,如 Object.keys，Array.isArray 等。原生的类互相扩展。如 Array 扩展自 Object。通常，当一个类扩展另一个类时，静态方法和非静态方法都会被继承。但内建类却是一个例外。它们相互间不继承静态方法。
