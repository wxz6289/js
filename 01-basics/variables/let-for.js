var funcs = [];
// for循环头部的let i不只为for循环本身声明了以个变量i;而是为每次循环声明了一个新的i。 在for..in和for..of循环中也一样。
for (let i = 0; i < 5; i++) {
    funcs.push(function(){
        console.log(i);
    })
}

funcs[3]();