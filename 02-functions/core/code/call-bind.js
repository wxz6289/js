// Function.prototype.bind：固定 this 与预设参数（偏函数）

var person = {
  name: 'Dreamer',
  showName: function () {
    console.log(this.name);
  },
};

var ushowName = person.showName;
ushowName(); // undefined — this 指向全局

var bshowName = ushowName.bind(person);
bshowName(); // Dreamer

function list() {
  return Array.prototype.slice.call(arguments);
}

var blist = list.bind(undefined, 37);
console.log(blist());       // [37]
console.log(blist(1, 2, 3)); // [37, 1, 2, 3]

function sum(a, b, c) {
  console.log('this.c:', this.c, 'args:', a, b, c);
  return a + b + c;
}

var bound = sum.bind({ c: 12 }, 12, 23);
console.log(bound(21)); // this.c: 12, args: 12 23 21
