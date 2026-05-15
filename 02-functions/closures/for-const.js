// "use strict";
/* for (const key of [1, 3, 4]) {
    console.log(key);  
} */
/* 
let array = []
for (var i = 0; i < 5; i++) {
    let j = i;  
    array[i] = function(){
        console.log(j);
    }
}

array[4](); */

// const b; //必须要初始化

// 块作用域函数

{ 
    foo();
    function foo(){
        console.log("foo");  
    }
}

foo();