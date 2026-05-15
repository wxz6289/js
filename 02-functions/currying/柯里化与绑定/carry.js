/* function curry(fn, ctx, ...outerArgs) {
    return function (...innerArgs) {
        let args = outerArgs.concat(innerArgs);
        return fn.apply(ctx, args);
    };
} */

function curry(fn, ctx, ...outerArgs) {
    return fn.bind(ctx, ...outerArgs)
}

function multiply(x, y, z){
    return x * y * z;
}

const x12mutiply = curry(multiply, null, 12);
const x12y10multiply = curry(multiply, null, 12, 10);

console.log(multiply(12, 10, 23));
console.log(x12mutiply(10, 23));
console.log(x12y10multiply(23));


