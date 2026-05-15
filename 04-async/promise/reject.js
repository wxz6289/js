//  Promise.reject() 返回一个状态为rejected的Promise实例，并且Promise.reject不认thenable
let promise = Promise.reject(" something wrong");

promise
.then(() => {
  console.log("it's ok");
})
.catch((err) => {
  console.log(err);
  console.log("no, it's not ok");
  return Promise.reject({
    then() {
      console.log("it will be ok");
    },
    catch() {
      console.log("not yet");
    }
  });
});
