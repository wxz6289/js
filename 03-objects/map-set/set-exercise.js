/*
const s = new Set();
// Set会去重和undefined
[2,3,4, 0, 3, 1, 2, ,8, 5,6,7,8].forEach(x => s.add(x));

for( let x of s) {
	console.log(x);
}
*/

/*
const set = new Set([1,2,4,5,6,5]);
console.log(set);
console.log(set.size);
console.log([...set]);
*/

/*
let set = new Set();
let a = NaN;
let b = NaN;

set.add(a);
set.add(b);
console.log(set);
*/

/*
let set = new Set();
set.add({});
console.log(set.size);
console.log(set);
set.add({});
console.log(set.size);
console.log(set);
*/

/*
let set = new Set();
let a = {};
set.add(a);
console.log(set.size);
set.add({});
console.log(set.size);
let no = set.delete({});
console.log(set.size);
console.log(no);
no = set.delete(a);
console.log(set.size);
console.log(no);
*/


const items = new Set([1,3,4,4,5]);
const array = Array.from(items); // 将Set转Array
const a2 = Array.from(items, val => val*2);
console.log(items, array, a2);


