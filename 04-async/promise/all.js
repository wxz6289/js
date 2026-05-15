 //  Promise.all([p1, p2, p3]) 用于将多个Promise实例包装成一个新的Promise实例，返回新的普通的Promise实例。
 //  接收数组作为参数，数组里可以是Promise对象，也可以是其他的值，只有Promise会等待状态的改变，但所有Promise都完成，该Promise 才完成，返回值是全部值组成的数组
 //  有任何一个子Promise失败，返回值是第一个失败的子Pormise的结果。

/*  console.log("here we go");

 Promise.all([1,2,3])
 .then( all => {
   console.log("1: ", all);
   return Promise.all([
     function () {
     console.log('ooxx');
   }, "xxoo", false]);
 })
 .then(all => {
   console.log("2: ", all);
   let p1 = new Promise( resolve => {
     setTimeout(() => {
       resolve("I 'm P1");
     }, 1500);
   });

  let p2 = new Promise( resolve => {
       setTimeout(() => {
         resolve("I 'm P2");
       }, 1000);
     });

     let p3 = new Promise( resolve => {
         setTimeout(() => {
           resolve("I 'm P3");
         }, 3000);
       });
      return Promise.all([p1, p2, p3])
   })
   .then(all => {
     console.log("3: ", all);
    console.time("test");
    console.time("tl")
     let p1 = new Promise( (resolve,reject) => {
       setTimeout(() => {
         reject("I 'm P1 -");
       }, 1500);
     });

    let p2 = new Promise( (resolve,reject) => {
         setTimeout(() => {
           reject("I 'm P2 -");
         }, 1000);
       });

       let p3 = new Promise( resolve => {
           setTimeout(() => {
             resolve("I 'm P3 -");
           }, 3000);
         });
        return Promise.all([p1, p2, p3])
     })
     .then( all => {
       console.log('4:', all);
     })
   .catch( err => {
     console.timeEnd("test");
     console.log("Catch:", err);

   });
 console.timeEnd("tl"); */

/*  let p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
     console.log("p1");
     resolve(1);
     console.log("1p");
   }, 0);
 });

let p2 = new Promise((resolve, reject) => {
  console.log("p2");
  reject(2);
  console.log("2p");
});

let p3 = new Promise((resolve, reject) => {
  console.log("p3");
  resolve(3);
  console.log("3p");
});

let p4 = Promise.race([p1, p2, p3]);
p4.then((value) => {
  console.log("all: ",value);
}).catch((err) => console.error("err:",err)); */

Promise.race([]) // pending
  .then((r) => { console.log('resolve') })
  .catch((e) => {console.log('error', e);})
