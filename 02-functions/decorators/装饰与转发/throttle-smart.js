function throttle(fn, ms){
    let isThrottled = false,
        savedArgs,
        savedThis;
    return function wrapper(){
        if(isThrottled){
            savedArgs = arguments;
            savedThis =this;
            return; 
        }
        fn.apply(this, arguments);
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
            if(savedThis){
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
}

let f = throttle(console.log, 1000);
f(1);
f(2);
f(3);

setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1200); 
setTimeout(() => f(6), 2100);