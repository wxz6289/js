/*  
在构造器调用内部使用`new.target`时,new成为了一个虚拟上下文，
使得new.target能够访问调用new 的目标构造器。
*/

class Parent {
    constructor() {
       // console.log(new.target);
        if(new.target === Parent){
            console.log("Parent instantiated");
        } else {
            console.log("A Child instantiated");
        }
    }
}

class Child extends Parent {};
class Child2 extends Child {};

let p = new Parent();
let c = new Child();
let c2 = new Child2();