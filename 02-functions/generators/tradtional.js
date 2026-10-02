let getOne = (cb) => {
    setTimeout(() => {
        cb("One");
    }, 100);
};

let getTwo = (cb) => {
    setTimeout(() => {
        cb("Two");
    }, 100);
};

getOne(console.log);
getTwo(console.log);