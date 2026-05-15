/* function foo() {
    foo.count = 4;//foo指向它自身
}

setTimeout(function() {
    //匿名（没有名字的）函数无法指向自身
}, 10) */


/* function foo() {
    var a = 2;
    console.log(this,"this")
    this.bar();
}

function bar() {
    console.log(this)
    console.log(this.a);
}

foo(); */



/* function baz() {
    //当前调用栈是：baz
    //因此，当前调用位置是全局作用域
    console.log("baz");
    bar();//bar调用的位置
}

function bar() {
    //当前调用栈是baz-》bar
    //因此，当前调用位置在baz中
    console.log("bar");
    foo();//foo的调用位置
}

function foo() {
    //当前调用栈是baz -》bar-》foo
    //因此，当前调用位置在bar中
    console.log("foo");
}

baz();//baz的调用位置 */





/* function foo() {
    console.log(this.a);
}
var a = 2;
foo();//2 */



/* function foo() {
    console.log(this.a);
}
var a = 2;
(function() {
    "use strict";
    foo();//2
})(); */




/* function foo() {
    console.log(this.a);
}

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a:2,
    obj2: obj2
};
obj1.obj2.foo();//42 */



/* function foo() {
    console.log(this.a);
}

var obj =  {
    a:2,
    foo:foo
}

obj.foo();
 */




 /* function foo() {
     console.log(this.a);
 }

 var obj = {
     a: 2,
     foo: foo
 };
 var bar = obj.foo;//函数别名
 var a = "oops, global";//a是全局对象的属性
 bar();//oops, global */



 /* function foo() {
     console.log(this.a);
 }

 function doFoo(fn) {
    //fn其实引用的是foo
    fn();//调用位置
 }

 var obj = {
     a: 2,
     foo: foo
 }

 var a = "oops global";//a是全局对象的属性
 doFoo(obj.foo);//oops global */



 /* function foo() {
     console.log(this.a);
 }

 var obj =  {
     a:2,
     foo: foo
 }

 var a = "oops global";//a是全局对象的属性
 setTimeout(obj.foo, 100);//"oops global"

 function setTimeout(fn, delay) {
     //等待delay毫秒
     fn();//调用位置
 } */


 /* function foo() {
     console.log(this.a);
 }
 var obj = {
     a:2
 }

 foo.call(obj);//2
 */


 /* function foo() {
     console.log(this.a);
 }
 var obj = {
     a:2
 }

 var bar = function() {
     foo.call(obj);
 }

 bar();//2
 setTimeout(bar, 100);//2

 bar.call(window);//2 */



/* function foo( something) {
    console.log(this.a, something);
    return this.a + something
}
var obj = {
    a:2
}

var bar = function() {
    return foo.apply(obj, arguments);
}


var b = bar(3);//2 3
console.log(b);//5 */



/* function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}


function bind(fn, obj) {
    return function() {
        return fn.apply(obj, arguments);
    }
}

var obj = {
    a:2
}

var bar = bind(foo, obj);
var b = bar(3);//2 3
console.log(b)//5 */


/* function foo(something) {
    console.log(this.a, something)
    return this.a + something;
}

var obj = {
    a:2
}

var bar = foo.bind(obj);
var b = bar(3);//2 3
console.log(b);//5 */



/* function foo(el) {
    console.log(el, this.id);
}

var obj = {
    id: "awesome"
}

//调用foo()时把this绑定到obj
[1,2,3].forEach(foo, obj); */


/* function foo(a) {
    let o = {};
    this = o
    o.a = a;
    return o;
    this.a = a;
}
var bar = new foo(2);
console.log(bar.a);//2 */


/* function foo() {
    console.log(this.a);
}

var obj1 = {
    a:2,
    foo
};

var obj2 = {
    a: 3,
    foo
}

obj1.foo();//2
obj2.foo();//3
obj1.foo.call(obj2);//3
obj2.foo.call(obj1);//2
let aa = obj1.foo.bind(obj2);
console.log(typeof aa);
aa();



 */


/* function foo(something) {
    this.a = something;
}

var obj1 = {
    foo: foo
};

var obj2 = {}

obj1.foo(2);
console.log(obj1.a);
obj1.foo.call(obj2,3);
console.log(obj2.a);
 */


/* function foo(something) {
    this.a = something;
}

var obj1 = {};
var bar = foo.bind(obj1);
bar(2);
var baz = new bar(3);
console.log(obj1.a);//2
console.log(baz.a);//3 */


/* function foo() {
    console.log(this.a);
}

var a = 2;
foo.call(null);//如果传入的是null，undefined this就指向全局window 所以结果为2 */




/* function foo(a, b) {
    console.log(" a:" + a + ",b" + b);
}
//把数组“展开”成参数
foo.apply(null, [2, 3]);//a:2, b:3
//使用bind()进行柯里化
var bar = foo.bind(null, 2);
bar(3);//a:2, b:3 */




/* function foo(a, b) {
    console.log(" a:" + a + ",b" + b);
}

//我们的DMZ空对象
var $ = Object.create(null);
//把数组展开成参数
foo.apply($, [2, 3]);//a:2,b3
//使用bind()进行柯里化
var bar = foo.bind($, 2);
bar(3);//a:2,b3 */



/* function foo() {
    console.log(this.a);
}
var a = 2;
var o = {a:3, foo:foo};
var p = {a: 4};
o.foo();//3
(p.foo = o.foo)();

//我们的DMZ空对象
var $ = Object.create(null);
//把数组展开成参数
foo.apply($, [2, 3]);//a:2,b3
//使用bind()进行柯里化
var bar = foo.bind($, 2);
bar(3);//a:2,b3 */





/* if(!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
        var fn = this;
        //捕获所有的curried参数
        var curried = [].slice.call(arguments, 1);
        var bound = function() {
            return fn.apply(
                (!this || this === (window || global))?
                obj : this,
                curried.concat.apply(curried, arguments)
            );
        };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    }
}
 */


/* function foo() {
    console.log("name"+ this.name);
}

var obj = {name: "obj"},
    obj1 = {name: "obj2"},
    obj2 = {name: "obj3"};
var fooOBJ = foo.softBind(obj);
fooOBJ();//name:obj
obj2.foo = foo.softBind(obj);
obj2.foo();//name:obj2
fooOBJ.call(obj3);
setTimeout(obj2.foo, 10);//name:obj */




/* function foo() {
    //返回一个箭头函数
    return (a) => {
        //this继承自foo()
        console.log(this.a);
    };
}

var obj1 = {
    a:2
}

var obj2 = {
    a:3
};

var bar = foo.call(obj1);
bar();
bar.call(obj2);//2箭头函数的this绑定后就不会改变，换为普通函数结果为3 */





/* function foo() {
    setTimeout(() => {
        //这里this在词法上继承自foo()
        console.log(this.a);
    }, 100);
}

var obj = {
    a: 2
};
foo.call(obj);//2 */




function foo() {
    var self = this;//lexical capture of this
    setTimeout(function() {
        console.log(self.a);
    }, 100);
}

var obj = {
    a: 2
};
foo.call(obj);//2