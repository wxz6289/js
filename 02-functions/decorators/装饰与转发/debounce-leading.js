function debounce(fn, ms){
    let isCooldown = false; //准备好执行
    return function(){
        if (isCooldown) return;
        fn.apply(this, arguments);
        isCooldown= true; // 等待时间结束
        setTimeout(() => {
            isCooldown = false; 
        }, ms);
    }
}

let f = debounce(console.log, 1000);
f(1);
f(2);


setTimeout(() => f(3), 100); 
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500); 