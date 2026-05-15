const p = new Promise((rs, rj) => {
  setTimeout(rs);
});

const t = {
  then(rs, rj) {
    rs();
  }
}


function isPromise(p) {
  return p === Promise.resolve(p);
}

function isPromise2(p) {
  return p !== null && (typeof p === 'object' || 'function' == typeof p) && typeof p.then === 'function'
}

console.log(isPromise(p));
console.log(isPromise(t));
console.log(isPromise2(t));