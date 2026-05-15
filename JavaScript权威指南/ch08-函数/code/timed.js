function timed(f) {
  return function (...args) {
    console.time(f.name);
    try {
      return f(...args);
    } finally {
      console.timeEnd(f.name);
    }
  }
}

function benchmark(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

let sum = timed(benchmark)(10000);
console.log('sum:', sum);