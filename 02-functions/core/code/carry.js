/* function curry(fn, ctx, ...outerArgs) {
    return function (...innerArgs) {
        let args = outerArgs.concat(innerArgs);
        return fn.apply(ctx, args);
    };
} */

/*
作用：创建一个已经设置好了一个或多个参数的函数。
实现：调用另一个函数并为它传入要柯里化的函数和必要参数。
*/

function curry(fn, ctx, ...outerArgs) {
    return fn.bind(ctx, ...outerArgs)
}

function multiply(x, y, z) {
    return x * y * z;
}

const x12mutiply = curry(multiply, null, 12);
const x12y10multiply = curry(multiply, null, 12, 10);

console.log(multiply(12, 10, 23));
console.log(x12mutiply(10, 23));
console.log(x12y10multiply(23));


