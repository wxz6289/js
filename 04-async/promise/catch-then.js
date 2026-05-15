
new Promise(resolve => {
  setTimeout(() => {
    resolve("hi");
  }, 1000);
}).then((value) => {
  console.log("start ", value);
  throw new Error("test error");
})
.catch( error => {
  console.log("I catch:", error);
  // return "Haha";
  throw new Error("another error");
})
.then(() => {
    console.log("arrive here");
})
.then(() => {
  console.log("... and here");
})
.catch(err => {
  console.log("No, I catch: ", err);
});

//  catch() 处理好了仍然返回的是一个Promises实例
//  建议在所有队列的最后都加上catch(),避免遗漏错误未处理造成意想不到的问题
