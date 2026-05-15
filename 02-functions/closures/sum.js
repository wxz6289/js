function sum(a){
    return function(b) {
        return a + b;
    }
}

console.log(sum(2)(5));

function isBetween(a, b){
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    return function(value){
       if(value >= min && value <= max){
           return true;
       } else { 
           return false;
       }
    }
}

function inArray(arr){
    return function(value){
        return arr.includes(value);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(isBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));


function byFiled(prop){
    return function(a, b){
        return a[prop] > b[prop]? 1: -1;
    }
   // return (a, b) => a[prop] - b[prop] ? 1: -1;
}


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byFiled("age"));
console.log(users);
users.sort(byFiled("name"));
console.log(users);

/* function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = (function(i){
            return function () { 
                console.log(i);
            }
        }(i));
        shooters.push(shooter);
        i++;
    }
    return shooters;
} */

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () { // shooter 函数
            console.log(j); // 应该显示它自己的数字
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();



