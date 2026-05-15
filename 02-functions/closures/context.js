const func = function () {
  this.age = 23;
  console.log(this);
}

func();
console.log(this.age);
console.log(this);
console.log(globalThis.age);
console.log(global.age);