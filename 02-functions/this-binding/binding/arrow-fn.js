const assert = require('assert');

function Ninja() {
    // this.whoAmI = function(){
    //     return this;
    // }
    this.whoAmI = function(){
        return this;
    }.bind(this);
  //  this.whoAmI = () => this; // 箭头函数不会改变this的指向
}

let n1 = new Ninja();

let n2 = {
    whoAmI: n1.whoAmI
};

console.log(n2.whoAmI() === n1);

assert(n1.whoAmI() === n1, "n1");
assert(n2.whoAmI() === n2, 'n2');