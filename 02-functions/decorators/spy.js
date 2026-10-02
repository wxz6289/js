function work(a, b) {
    return a + b;
}

function spy(fn) {
    let calls = [];
    return function fun(...args) {
        calls.push(args);
        fun.calls = calls;
        return fn.apply(this, args)
    };

}

work = spy(work);

console.log(work(1, 2));
console.log(work(4, 5));

for (let args of work.calls) {
    console.log('call:' + args.join());
}