console.log(JSON.stringify(undefined));
console.log(JSON.stringify(function(){}));
console.log(JSON.stringify([1, undefined, null, {}, function(){}]));

var a = { 
    c: "King",
    b: b
};

var b = {
    a: a,
    c: 12
}

console.log(b);

console.log(JSON.stringify(b));


