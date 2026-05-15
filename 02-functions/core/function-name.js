var a = function b(){
    console.log(arguments);
    
    //this, arguments;
    return this;
}

console.log(a());
console.log(a.arguments);



var e = function(){

}
//具名函数 匿名函数
console.log(e.name);

console.log(a.name);

function c(){
}

console.log(c.name);

var f = {
    e: function f(){

    }
}

console.log(f.e.name);

// 具名函数的name值为函数名，匿名函数的name值为赋值给的变量或属性名

