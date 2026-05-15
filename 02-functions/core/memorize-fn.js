function isPrime(value) {
    if(!isPrime.cache){
        isPrime.cache = {};
    }
    if(isPrime.cache[value] !== undefined){
        return isPrime.cache[value];
    }
    let prime = value !== 0 && value !== 1;
    for(let i = 2; i < value; i++){
        if(value % i == 0){
            prime = false;
            break;
        }
    } 
    console.log("compute ...", prime);
    return isPrime.cache[value] = prime;
}

console.log(isPrime(5));
console.log(isPrime(5));
console.log(isPrime(6));

