function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, delay, ...args);
  }
}


const debounceLog = debounce(console.log, 1000);
debounceLog(12);
debounceLog('log:', 22);
setTimeout(() => debounceLog('log: timeout'), 1000);
