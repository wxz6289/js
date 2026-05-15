function isPrime(n){
    if(!isPrime.answers){
        isPrime.answers = {};
    }
    if(isPrime.answers[n] != null){
        return isPrime.answers[n];
    }
    let prime = n != 1;
    for (let i = 2; i < n; i++) {
        if(n % i == 0){
            prime = false;
            break;
        }
    }
    return isPrime.answers[n] = prime;
}

console.log(isPrime(233), isPrime);

// 缓存记忆DOM元素
function getElements(name){
    if(!getElements.cache){
        getElements.cache = {};
    }
    return getElements.cache[name] || document.getElementById(name);
}

/* 
缓存函数的优点及问题：
在函数调用之前获取之前计算过的结果，具有很大的性能优势，它发生在幕后，完全无缝，无需任何特殊操作或为此做额外的初始化工作。
但是，这样做会牺牲掉一些内存，函数做缓存的工作，而缓存的操作不应该与业务逻辑放在一起，另外这样做很难测量一个算法的性能。


*/