// Function.prototype.apply：指定 this 并以数组传参

const numbers = [23, 12, 45, 76, 32, 99, 3, 56];

function max(nums) {
  return Math.max.apply(null, nums);
}

console.log(max(numbers)); // 99
// 等价于 Math.max(...numbers)
