// 私有字段 #：仅在声明类内可访问，子类不能直接读取

class CoffeeMachine {
  #waterLimit = 200;
  #waterAmount = 0;
  #power = 0;

  #checkWater(value) {
    if (value < 0) throw new Error('Negative water');
    if (value > this.#waterLimit) throw new Error('Too much water');
  }

  constructor(power) {
    this.#power = power;
    console.log(`Create coffee-machine, power: ${power}`);
  }

  set waterAmount(value) {
    this.#checkWater(value);
    this.#waterAmount = value;
  }

  get waterAmount() {
    return this.#waterAmount;
  }

  get power() {
    return this.#power;
  }
}

class MegaCoffeeMachine extends CoffeeMachine {
  getWaterAmount() {
    // return this.#waterAmount; // SyntaxError — 子类无法访问父类私有字段
    const field = '#waterAmount';
    return this[field]; // undefined — 字符串访问无效
  }
}

const cm = new CoffeeMachine(100);
cm.waterAmount = 200;
console.log(cm.waterAmount, cm.power);
cm.power = 20; // 无 setter，赋值无效
console.log(cm.power); // 仍为 100

const mm = new MegaCoffeeMachine(100);
mm.waterAmount = 200;
console.log('subclass access:', mm.getWaterAmount()); // undefined
