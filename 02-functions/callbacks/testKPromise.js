const KPromise = require("./KPromise");
const test = new KPromise(function resolver(resolve, reject){
    setTimeout(()=> {
        resolve("Haha!");
    },1000)
});

test.then("hehe")
    .then(console.log);