import KPromise from './KPromise.js';

const test = new KPromise(function resolver(resolve, reject) {
  setTimeout(() => {
    resolve('Haha!');
  }, 1000);
});

test.then((value) => {
  console.log(value);
});
