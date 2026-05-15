/* 
function creap() {
    console.log("this:", this);
    return this;
}
console.log("function: ", creap());

let sneak = creap;
console.log("sneak function:", sneak());

let ninja = {
    shulk: creap
}

console.log(ninja.shulk() === ninja);

let ninja2 = {
    shulk: creap
}

console.log(ninja2.shulk() === ninja2);
 */

 // 引用丢失问题及解决

/* 
 var ninja = {
     chirp: function(n){
         return n == 1 ? "chirp" : this.chirp(n - 1) + '-chirp'; // 使用this来引用执行上下文
        //return n == 1 ? "chirp": ninja.chirp( n - 1) + '-chirp';
     },
     chirp2: function chirp2(n){
         return n == 1 ? "chirp" : chirp2(n - 1) + '-chirp'; // 使用内联函数来进行递归引用 
     }
 } 
 */

var ninja = {
    chirp: function (n) {
        return n == 1 ? "chirp" : arguments.callee(n - 1) + '-chirp'; // 使用arguments.callee来引用执行上下文

        //return n == 1 ? "chirp" : this.chirp(n - 1) + '-chirp'; // 使用this来引用执行上下文
        //return n == 1 ? "chirp": ninja.chirp( n - 1) + '-chirp';
    },
    chirp2: function chirp2(n) {
        return n == 1 ? "chirp" : chirp2(n - 1) + '-chirp'; // 使用内联函数来进行递归引用 
    }
} 

// console.log(ninja.chirp(3));
 let satima = ninja;
 ninja = {};
console.log(satima.chirp(3));
console.log("chirp2: ", satima.chirp2(3));

/* let b = function a(){
    console.log(b == a); //内联函数的名称跟变量有点像，它们的作用域仅限于声明它们的函数。
}

b(); */


 
 






