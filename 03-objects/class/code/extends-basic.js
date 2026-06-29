// 继承：extends、super、方法重写

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs at ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped`);
  }
}

class Rabbit extends Animal {
  run(speed) {
    super.run(speed);
    console.log('Rabbit hopping');
  }
  hide() {
    console.log(`${this.name} hides!`);
  }
}

const rabbit = new Rabbit('Rabbit');
rabbit.run(6);
rabbit.hide();
rabbit.stop();

console.log(Animal.toString().startsWith('class')); // true — 类构造器字符串以 class 开头
