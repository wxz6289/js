/* let m = Math.max(12, 34, 2, 45, 32);
console.log(m);

function max(arr){
    return Math.max.apply(Math, arr)
}

console.log(max([12, 34, 2, 45, 32]));
 */

/* function factorial(n){
    if(n <= 1){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let another = factorial;
factorial = null;
console.log(another(5)); */


/* let factorial = function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1); // 推荐写法
    }
}; */

let factorial = function(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * arguments.callee(n - 1);
    }
};


let another = factorial;
factorial = null;
console.log(another(5));
