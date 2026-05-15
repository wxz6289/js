const funs = [];

/* 
// 使用var声明循环变量i,循环里每次迭代同时共享循环变量i,循环内部创建的函数全都保留了对相同变量的引用。
for (var i = 0; i < 10; i++) {
  funs.push(function(){
      console.log(i);
  })
}
 */

/* 
 //使用立即执行函数表达式,强制生成计数器变量的副本。
 //在循环内部,IIFE为接收的每一变量i的值都创建了副本并存储为变量value,而这个变量的值就是相应迭代创建的函数所用的值。
 for (var i = 0; i < 10; i++) {
   funs.push(function(value) {
       return function(){
           console.log(value);
       }
   }(i));
 }
 */

/* 
 //每次循环let声明都会创建一个新变量i,并将初始化为i的当前值,所以循环内部创建的每个函数都能够得到属于它们自己的i的值。
 // let声明在循环内部的行为是在标准中专门定义的,它不一定与let的提升特性有关。
 for (let i = 0; i < 10; i++) {
   funs.push(function() {
     console.log(i);
   });
 }
 */

let obj = {
  name: "King",
  age: 20
}


let arrs = [1, 2, 3]
/* 

 for (const key in obj) {
    funs.push(function(){
        console.log(key);
    });
 }

 */

/*  for (const value of arrs) {
      funs.push(function() {
        console.log(value);
      });
 }

funs.forEach(function(fn){
    fn();
}); */

for (let i = 0, len = arrs.length; i < len; i++) {
  if (i == 1) {
    arrs.push(2);
  }
  console.log(i, len, arrs.length)
}

let points = [{ x: 1, y: 2 }, { x: 3, y: 4 }]
let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;
let points2 = [{ x: x1, y: y1 }, { x: x2, y: y2 }];

console.log(points == points2);
console.log(points2)
