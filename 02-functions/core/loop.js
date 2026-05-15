function loop(condition = 0, max, fn){
    if(condition < max){
        fn(condition);
        condition++;
    }
}

loop(0, 10, (x)=> console.log(x))