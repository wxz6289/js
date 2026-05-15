let sum = new Function("a", "b", "return a + b");
console.log(sum(2, 6));
let sum2 = new Function("a, b", "return a + b");
console.log(sum2(5, 6));


function getFunc(){
    let value = "test";
    let func = function(){
        console.log(value);
    };
  // let func = new Function('console.log(value)');
    return func;
};

getFunc()();