// 类字段绑定方法：箭头函数固定 this，避免 setInterval 丢失上下文

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render = () => {
    const date = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const output = this.template
      .replace('h', pad(date.getHours()))
      .replace('m', pad(date.getMinutes()))
      .replace('s', pad(date.getSeconds()));
    console.log(output);
  };

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

const clock = new Clock({ template: 'h:m:s' });
clock.render(); // 演示一次输出，不启动定时器
