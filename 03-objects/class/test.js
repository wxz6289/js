class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer;
  }

  render = () => {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  };

}

class ExtendendClock extends Clock {
  constructor({ template, precision = 1000 }) {
    super({ template });
    this.precision = precision;
  }
  start() {
    this.render();
    setInterval(() => this.render(), this.precision);
  }
}

let clock = new Clock({ template: 'h:m:s' });
// clock.start();

let eclock = new ExtendendClock({ template: 'h:m:s', precision: 2000 });

// eclock.start();


class Animal {
  showName() {
    console.log('animal');
  }
  constructor() {
    this.showName();
  }
}

class Rabbit extends Animal {
  showName() {
    console.log('rabbit');
  }
}

// new Animal();
new Rabbit();


let animal = {
  sayHi() {
    console.log('form animal');
  }
}

let rabbit = {
  __proto__: animal,
  sayHi() {
    super.sayHi();
  }
}

let plant = {
  sayHi() {
    console.log('from plant');
  }
}

let tree = {
  __proto__: plant,
  sayHi: rabbit.sayHi
}

tree.sayHi();

class Cat extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}



console.dir(Cat)
const c = new Cat('hello kity');

console.log(c);

console.log(Cat.keys(c));

let t = Cat.assign({}, { a: 12, b: 13 }, { c: 'c' });
console.log(t);

let s = Cat.create({ a: 12 });
console.log(s.a);