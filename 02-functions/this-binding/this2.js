
/* function foo(num) {
    console.log("foo:", +num);
    //记录被调用的次数
    this.count++;
}

foo.count = 0;
var i;
for(i = 0; i < 10; i++) {
    if(i > 5) {
        foo.apply(foo, [i]);
    }
}

console.log(foo.count) */


function foo(num) {
    console.log("foo:", +num);
    //记录被调用的次数
    foo.count++;
}

foo.count = 0;
var i;
for(i = 0; i < 10; i++) {
    if(i > 5) {
        foo(i);
    }
}

console.log(foo.count)


/* function foo(num, a) {
    console.log("foo:", +num);
    //记录被调用的次数
    console.log(typeof a);
    a.count++;
}

var i;
foo.count = 0;
for(i = 0; i < 10; i++) {
    if(i > 5) {
        foo(i, foo);
    }
}
console.log(foo.count) */





/* function foo(num) {
    console.log("foo:", +num);
    //记录foo被调用的次数
    data.count++;
}

var data = {
    count: 0
}
var i;
for(i = 0; i < 10; i++) {
    if(i > 5) {
        foo(i);
    }
}
console.log(data.count)
 */