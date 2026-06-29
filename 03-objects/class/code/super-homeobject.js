// super 依赖 [[HomeObject]]：只有 method() 语法才设置 HomeObject

const animal = {
  name: 'Animal',
  eat() {
    console.log(this.name, 'eats');
  },
};

const rabbit = {
  __proto__: animal,
  name: 'Rabbit',
  eat() {
    super.eat(); // HomeObject = rabbit
  },
};
rabbit.eat();

const longEar = {
  __proto__: rabbit,
  name: 'Long Ear',
  eat() {
    super.eat();
  },
};
longEar.eat();

// 复制带 super 的方法不安全：HomeObject 仍指向原对象
const plant = {
  eat() {
    console.log("I'm a plant");
  },
};
const tree = {
  __proto__: plant,
  eat: rabbit.eat, // 调用 super 时仍按 rabbit 的 HomeObject 解析
};
tree.eat(); // undefined eats — HomeObject 仍指向 rabbit，this 却是 tree

// 对象字面量中 eat: function(){} 写法在解析期就不能使用 super（SyntaxError）
// 只有 method() 简写才能设置 [[HomeObject]]
