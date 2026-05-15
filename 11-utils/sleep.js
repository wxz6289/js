/* function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  });
}

console.log(1);
console.time('start');
sleep(1000).then(() => {
  console.log(2);
  console.timeEnd('start')
}); */


function printArray(arr = [], i = 0) {
  let len = arr.length;
  setTimeout(() => {
    if (i < len) {
      console.log(arr[i]);
      if (i == len - 1) {
        console.timeEnd('time');
      }
      printArray(arr, ++i);
    }

  }, 1000);
}

console.time('time');
printArray([0, 1, 2, 2, 3], 1);
