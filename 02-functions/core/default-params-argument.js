function foo(first, second) {
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    console.log(second, arguments[1]);
    first = "A";
    arguments[1] = "B";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    console.log(second, arguments[1]);
    console.log(arguments, second);
}

foo("Hello", "King");
/* 
在非严格模式下，命名参数变化会同步更新到arguments对象中,同时arguments的变化也会反应到命名参数中。
但是函数使用了默认参数无论是否显示定义了严格模式，默认参数的存在使得命名参数与arguments对象分离，从而使arguments对象变化与命名参数发生变化不在互相影响。

*/
