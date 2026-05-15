/* new Promise(function(resolve, reject){
    setTimeout(() => resolve(1), 1000);
}).then(function(result){
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
}); */

/* let p = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})

p.then(function (result) {
    console.log(result);
    return result * 2;
})

p.then(function (result) {
    console.log(result);
    return result * 2;
})

p.then(function (result) {
    console.log(result);
    return result * 2;
}); */
/* 
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(result * 2) 
        }, 1000);
    })
}).then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 2)
        }, 1000);
    })
}).then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 2)
        }, 1000);
    })
}).then(result => console.log(result)); */

// 不在执行阶段抛出的错误catch不到
new Promise(function(resolve, reject){
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(console.log);