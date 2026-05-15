let  o = { };

let a = {
    b: 42,
    c: o,
    d: function() {
    }
}

o.e = a;

console.log(a);
// console.log(JSON.stringify(a));


