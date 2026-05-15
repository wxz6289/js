import isNaN from './isNaN.mjs';
import is from './is';
import isNull from './isNull.mjs'
console.log(isNaN(NaN));
console.log(is(Infinity, 1 / 0));
console.log(is(NaN, NaN));

console.log(isNull(null));

console.log(isNull(undefined));

