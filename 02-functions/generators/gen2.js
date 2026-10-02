let generator;

let getOne = () => {
    setTimeout(() => {
        generator.next("One");
    }, 100);
};

let getTwo = () => {
    setTimeout(() => {
        generator.next("Two");
    }, 100);
};
// 调用不会阻塞代码以异步方式运行
function* main(){
    let one = yield getOne();
    let two = yield getTwo();
    console.log(one);
    console.log(two); 
}

generator = main();
generator.next();