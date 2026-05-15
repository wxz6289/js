Function.prototype.$call = function (ctx, ...args) {
  const fn = this;
  if (typeof ctx !== 'object' || ctx === null) ctx = Object.create(null);
  ctx.fn = fn;
  ctx.fn(...args);
  delete ctx.fn;
}

function say() {
  console.log(this.name + ': ' + this.age);
}

const person = {
  name: 'John',
  age: 13,
};

say.$call(person);
say.$call('hello');
say.$call(null, 'hello');
say.call('hello');