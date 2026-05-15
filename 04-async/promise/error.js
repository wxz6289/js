// Promise会自动捕获内部异常，并交给rejected相应函数处理

/* new Promise( (resolve, reject) => {
  setTimeout((hw) => {
    console.log(hw, "test");
    // reject(new Error("bye"));
   throw new Error("bye");
 }, 2000, "hello World");
})
.then( value => {
  console.log(value);
}, error => console.log("Error:", error.message))
// .catch( error => {
//   console.log("Error:", error.message);
// }); */



/* 
 let p = new Promise((resolve, reject) => {
    throw new Error("opps");
 });

 p.then((value) => console.log(vaule))
  .catch((err) => console.error("E:", err)); 
*/



let rejected;
process.on("unhandledRejection", function(reason, promise){
  console.log(reason.message);
  console.log(promise === rejected);
});

process.on("rejectionHandled", function(promise){
  console.log("rejectionHandled");
  console.log(rejected === promise);
}) 


rejected = Promise.reject(new Error("Opps!"));

setTimeout(() => {
  rejected.catch((err) => console.error(err.message))
}, 1000);
