function work(a, b){
    return a + b;
}

function spy(fn){
    let calls = [];
    return function (arguments){
        calls.push(arguments);
        return fn.apply(this, arguments)
    };
}

work = spy(work);
work = spy(work);

console.log(work(1, 2));
console.log(work(4, 5));

/* for (let args of work.calls) {
    console.log('call:' + args.join());
} */