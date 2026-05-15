class CoolArray extends Array {
  sum() {
    return this.reduce(function (pre, cur) {
      return pre + cur
    }, 0)
  }
}

const cool = new CoolArray(3);
console.log(cool.length, cool.sum());

const cool2 = CoolArray.of(3);
console.log(cool2.length, cool2.sum());
