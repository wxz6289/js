/* let value = "Surprise!";

function f() {
    let value = "the closest value";

    function g() {
        debugger; // 在控制台中：输入 alert( value )；Surprise!
    }

    return g;
}

let g = f();
g(); */

/*
var a = 10;

function fun(){
    console.log(a);
}

(function(fn){
    var a = 20;
    fn();
})(fun); */


function fun(n, o){
    console.log(o);
    return {
        fun: function(m){
            return fun(m, n);
        }
    }
}


let a = fun(0); //undefined
a.fun(1); //
a.fun(2);
a.fun(3);

let b = fun(0).fun(1).fun(2).fun(3);
b.fun(4);
b.fun(5);
