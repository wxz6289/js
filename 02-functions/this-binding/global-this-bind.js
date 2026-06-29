// 非严格模式：顶层函数中的 this 指向全局对象，对 this 赋值会创建全局属性

const func = function () {
  this.age = 23;
  console.log(this === globalThis); // true（Node / 浏览器全局环境）
};

func();
console.log(globalThis.age); // 23
