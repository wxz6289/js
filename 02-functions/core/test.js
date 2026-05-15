// 声明提升
/* 
var fn = function () {
    console.log('fn1');
}

function fn() {
    console.log('fn2');
}

fn(); // fn1
 */

/* 

// 函数声明优先于变量声明提升

var fn;

function fn() {
    console.log('fn2');
}

fn = function () {
    console.log('fn1');
}

*/
/* 
function foo() {
    console.log(a);
}

function bar() {
    var a = 2;
    foo();
}

var a = 3;

bar(); */
/* 
function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log(this.a);
}

foo(); */
/* 
function Foo(x) {
    this.a = x;
    console.log(this);
    return { x };
}
let f = new Foo(3)
console.log(f); */

/* const list = [];

for (let i = 1; i <= 100; i++) {
    if (!(i % 15)) {
        list.push('FizzBuzz');
    } else if (!(i % 5)) {
        list.push('Buzz');
    } else if (!(i % 3)) {
        list.push('Fizz');
    } else {
        list.push(i);
    }
} */


/* const list = [...new Array(100).keys()]
    .map((n) => n + 1)
    .map((n) => n % 15 ? n : 'FizzBuzz')
    .map((n) => isNaN(n) || n % 5 ? n : 'Buzz')
    .map((n) => isNaN(n) || n % 3 ? n : 'Fizz');

console.log(list);
console.log(list.length) */
/* let c;
for (c of 'hello world') {
    if (c == ' ') return;
    console.log(c);
} */

const fib = {
    [Symbol.iterator]() {
        let a = 1, b = 0, current;
        return {
            next() {
                current = a;
                [a, b] = [a + b, a];
                return { value: current };
            }
        }
    }
}

for (let f of fib) {
    if (f > 100) break;
    console.log(f);
}
