console.log("start");
setTimeout(() => {
    console.log("setTimeout");
}, 0);
new Promise((resolve, reject) => {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}).then(() => {
    console.log("then");
});
console.log("end");
// start
// 0, 1, 2, 3, 4
// end
// then
// setTimeout