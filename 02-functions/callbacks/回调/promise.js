function step(value){
    return new Promise(function(resolve, reject){
        if(value < 10){
            resolve(value + "success");
        } else {
            reject(value + "error")
        }
    });
}

step(22)
.then(vale => step(32).catch(err => console.error(err)))
.catch(err => console.error(err));