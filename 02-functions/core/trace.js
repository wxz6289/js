/* function trace(o, m) {
  const orignal = o[m];
  o[m] = function (...args) {
    console.log('Enter:', new Date(), m);
    console.time(orignal.name);
    const result = orignal.apply(o, args);
    console.timeEnd(orignal.name);
    console.log("Exit:", new Date(), m);
    return result;
  }
}

const test = {
  name: 'test',
  hello() {
    return this.name
  }
}

trace(test, 'hello');
const result = test.hello();
console.log(result); */

function myCall(o, fn, ...args) {
  if (o === null || typeof o !== 'object') {
    o = Object.create();
  }
  const tempMethod = Symbol('m');
  o[tempMethod] = fn;
  o[tempMethod](...args);
  delete o[tempMethod];
}


function hello(age) {
  console.log(this.name, age);
}

const xx = {
  name: 'king'
}

myCall(xx, hello, 23);
console.log(xx);