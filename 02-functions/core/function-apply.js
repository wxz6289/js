let numbers = [23, 12, 45, 76, 32, 99, 3, 56];
// let m = Math.max(...numbers);
let a = {};
let max = function(nums){ 
    return Math.max.apply(null, nums);
}

let m = max(numbers);
console.log(m);

