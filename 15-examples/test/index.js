let btn = document.getElementById("btn")
btn.addEventListener('click', run);
function run() {
  let count = localStorage.getItem("count");
  count = count ? count : 0
  count++
  localStorage.setItem("count", count);
  let currentDate = localStorage.getItem("currentDate")
  let today = new Date().toISOString().split("T")[0];
  if (today != currentDate) {
    localStorage.removeItem("count")
    localStorage.removeItem("currentDay")
    localStorage.setItem("currentDate", today)
    console.log("我可以跳转11", count);
  } else {
    if (count < 3) {
      console.log("我可以跳转13", count);
    }
  }
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetDate);


function resetDate() {
  localStorage.removeItem('count');
  localStorage.removeItem('currentDate');
}

// function some(arr, fn) {
//   let result = false
//   for (const item of arr) {
//     if (fn(item)) {
//       result = true
//       break;
//     }
//   }
//   return result
// }

// function some(arr, fn) {
//   let count = 0
//   for (const item of arr) {
//     if (fn(item)) {
//       count++
//       break
//     }
//   }

//   if (count) {
//     return true
//   } else {
//     return false
//   }
// }

// function filter(arr, fn) {
//   let newArr = []
//   for (const item of arr) {
//     if (fn(item)) {
//       newArr.push(item)
//     }
//   }
//   return newArr
// }

function every(arr, fn) {
  let result = true
  for (const item of arr) {
    if (!fn(item)) {
      result = false;
      break
    }
  }
  return result
}


const result = every([1, 2, 3, 4, 6], (a) => a % 2 == 0);
const result1 = every([1, 2, 3, 4, 6], (a) => a >6);
console.log(result, result1);

let count2 = 0;
function log() {
  console.log(count2++);
}

setTimeout(log);
setTimeout(log);
