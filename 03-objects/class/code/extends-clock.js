// 继承重写：Clock 模板渲染 + 自定义精度

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render() {
    const date = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const output = this.template
      .replace('h', pad(date.getHours()))
      .replace('m', pad(date.getMinutes()))
      .replace('s', pad(date.getSeconds()));
    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor({ template, precision = 1000 }) {
    super({ template });
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

new Clock({ template: 'h:m:s' }).render();
new ExtendedClock({ template: 'h:m:s', precision: 2000 }).render();

// 构造器中调用重写方法：派生类构造器执行前会先调父类构造器
class Animal {
  constructor() {
    this.showName();
  }
  showName() {
    console.log('animal');
  }
}

class Rabbit extends Animal {
  showName() {
    console.log('rabbit');
  }
}

new Rabbit(); // rabbit — 多态在构造阶段即生效
