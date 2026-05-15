# Function对象

## 属性

1. name 函数名
2. length 必传参数个数(形参个数)
3. caller 函数执行时的调用者
4. prototype 函数的原型对象，不能被修改

## 原型方法

1. apply(thisArg, [argArray])
2. call(thisArg, arg,...)
3. bind(thisArg, arg1[, arg2[, ...]])
4. toString()

## 继承方法

1. valueOf() 自动调用
2. setPrototypeOf(obj, prototype)
3. isPrototypeOf(object)
4. hasOwnProperty(prop)
5. propertyIsEnumerable(prop)
6. toString()

# new Function语法

```js
let func = new Function([arg1 [,arg2 [, arg3 [, ...argn]]]],functionBody);
```

即在创建函数时，先传入函数所需的参数（准确地说是形参名），最后传入函数的函数体。传入的所有参数均为字符串。由于历史原因，参数也可以按逗号分隔符的形式给出。
与已知方法相比这种方法最大的不同是，它是在运行时使用描述函数的字符串来创建函数的。
使用 new Function 创建函数的应用场景非常特殊，比如需要从服务器获取代码或者动态地按模板编译函数时才会使用，在一般的程序开发中很少使用。
通常，函数会使用一个特殊的属性 [[Environment]] 来记录函数创建时的环境，它具体指向了函数创建时的词法环境。
但是如果我们使用 new Function 创建函数，函数的 [[Environment]] 并不指向当前的词法环境，而是指向全局环境。因此，不能在新函数中直接使用外部变量。不过这样也挺好，这有助于减少我们代码中可能出现的错误。同时使用参数显式地传值也有助于维护良好的代码结构且避免了因使用 minifier 带来的问题。

函数定义的两种形式：

+ 函数声明 存在声明提升
+ 函数表达式  函数调用必须要在函数定义之后
