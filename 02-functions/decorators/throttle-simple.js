function throttle(fn, delay) {
  let executing = false;
  return function (...args) {
    if (executing) return;
    executing = true;
    setTimeout(() => {
      fn(...args);
      executing = false;
    }, delay);
  }
}

const throtteLog = throttle(console.log, 1000);
let i = 0;
console.time('performance');
throtteLog(i++);
setTimeout(() => {
  throtteLog(i++);
}, 500);

setTimeout(() => {
  throtteLog(i++);
  console.timeEnd('performance');
}, 1100);

setInterval(() => {
  throtteLog(i++)
}, 500);