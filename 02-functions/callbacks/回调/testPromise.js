/* 
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
});

promise.then(() => {
    console.log(3)
});

console.log(4);  
*/
/* 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    },1000);
});

const promise2 = promise.then((value) => {
    console.log(value);
    throw new Error("error!");
});

console.log(promise);
console.log(promise2);

setTimeout(()=> {
    console.log("promise", promise);
    console.log("promise1", promise2);
}, 2000); */

/* 
// promise的状态发生了变化就不能再变
const promise = new Promise((resolve, reject) => {
    resolve("success1");
    reject("error");
    resolve("success2");
});

promise
.then((res) => {
    console.log("then", res);
})
.catch((err) => {
    console.error("catch", err);
}); 
*/

/* Promise.resolve(1)
.then((res) => {
    console.log(res);
    return 2;
})
.catch((err) => {
    console.log(err);
})
.then((res) => {
    console.log(res);
}) */
/* 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("once");
        resolve("success");
    }, 1000);
})

const start = Date.now();
promise.then((res) => {
    console.log(res, Date.now() - start);
});

promise.then((res) => {
    console.log(res, Date.now() - start);
});

 */

 /* Promise.resolve()
 .then(() => {
    // throw new Error("error!");
     return Promise.reject(new Error("error!"))
    // return new Error("error!");
 })
 .then((res) => {
     console.log("then", res);
 })
 .catch((err) => {
    console.error("catch", err);
 }) */
/* 
then和catch的返回值不能是本身，否则会造成死循环。
 const promise = Promise.resolve()
    .then((value) => {
        console.log(value);
        return promise;
    });

promise.catch(console.error) */

/* 
// then和catch期望的是函数，如果不是则会发生值穿透
Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log) 
*/

/* 
 // catch是then的一种简写,但是then的第一个参数抛出的错误并不能在第二参数里捕获，只能在后续的then或catch中捕获
Promise.resolve()
    .then(function success(res){
        throw new Error("error");
    },
    function fail(e){
        console.error("fail:", e);
    })
    .catch(function fail2(e){
        console.error("fail2: ", e);
    }) */

/* 
    Promise.resolve()
    .then(function success1(res){
        throw new Error("error");
    },function fail1(err){
        console.error("fail1: ", e);
    })
    .then(function success2(res){
        console.log("success2: ", res);
    }, function fail2(err) {
        console.log("fail2: ", err)
    }) */


/* 
Macrotasks和Microtasks 都属于上述的异步任务中的一种，他们分别有如下API：
macrotasks: setTimeout, setInterval, setImmediate, I / O, UI rendering
microtasks: process.nextTick, Promise, MutationObserver
process.nextTick与promise.then属于microtask,而setImmediate属于macrotask,在事件循环的每个阶段macrotask都会执行microtask.
任务队列中，在每一次事件循环中，macrotask只会提取一个执行，而microtask会一直提取，直到microsoft队列为空为止。
也就是说如果某个microtask任务被推入到执行中，那么当主线程任务执行完成后，会循环调用该队列任务中的下一个任务来执行，直到该任务队列到最后一个任务为止。而事件循环每次只会入栈一个macrotask, 主线程执行完成该任务后又会检查microtasks队列并完成里面的所有任务后再执行macrotask的任务。

 */
   
    process.nextTick(() => {
        console.log("nextTick");
    })



    setTimeout(() => {
        console.log("timeout");
    }, 0);

    Promise.resolve()
    .then(() => {
        console.log("then");
    });

    setImmediate(() => {
        console.log("setImmediate")
    });

    console.log("end");