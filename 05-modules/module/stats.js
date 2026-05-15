const PI = Math.PI;
class Circle {
  constructor(r) {
    this.r = r;
  }
  area(r) {
    return PI * this.r * this.r;
  }
}

const EX = {
  PI,
  Circle
}

export { PI, Circle }
// export default EX;