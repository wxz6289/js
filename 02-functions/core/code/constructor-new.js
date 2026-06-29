// new 与构造函数：this 绑定、初始化、返回对象

function Person(name) {
  this.name = name;
  this.sayName = function () {
    return 'Hello ' + this.name;
  };
  return 'Haha'; // 返回原始值时被忽略，仍返回 this
}

const p = new Person('King');
console.log(p); // Person { name: 'King', sayName: [Function] }
console.log(p.sayName()); // Hello King

// 不用 new 调用时 this 指向全局（非严格模式）
console.log(Person('Panpan'));
