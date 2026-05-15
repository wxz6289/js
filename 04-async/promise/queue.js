function queue(things) {
  let promise = Promise.resolve();
  things.forEach( thing => {
    promise = promise.then(() => { // 常见错误 没有把then产生的promise赋给promise,没有生成队列
      return new Promise(resolve => {
        doThing(thing, (thing) => {
          resolve(thing);
        });
      });
    });
  });
  return promise;
}

function doThing(thing, callback){
  console.log(thing, "test");
  callback(thing);
}

function queue2(things) {
  return things.reduce((promise, thing) => {
    return promise.then(() => {
      return new Promise(resolve => {
        doThing(thing, () => {
          resolve(thing);
        });
      });
    });
  }, Promise.resolve());
}
//  常见错误
function queue3(things) {
  return things.reduce((promise, thing) => {
    let step =   new Promise(resolve => {
        doThing(thing, () => {
          resolve(thing);
        });
    });
    return promise.then(step);
  }, Promise.resolve());
}


queue2(["lots", "of", "things"]).then(value => {
  console.log(value);
});
