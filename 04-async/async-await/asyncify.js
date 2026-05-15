function asyncify(fn, ...oArgs) {
  const originFn = fn;
  let it = setTimeout(function () {
    it = null;
    if (fn) fn(oArgs);
  }, 0);
  fn = null;

  return function (...args) {
    if (it) {
      fn = originFn.bind.apply(originFn, [this,...oArgs, ...args]);
    } else {
      originFn.apply(this, oArgs.concat(args));
    }
  };
}

function result(data) {
  console.log(a, data);
}

function asyncOption(timeout, fn) {
  setTimeout(fn, timeout);
}

let a = 0;

asyncOption(100, asyncify(result));

a++;

console.log('done');