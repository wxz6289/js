function f(){
    console.log(this.name);
}
//一个函数不能作为重复边界
f = f.bind({name: "John"}).bind({name: "Tome"});
f();

function sayHi(){
    console.log(this.name);
}

sayHi.text = "king";

let bound = sayHi.bind({name: "Hanmei"});
console.log(bound.text);
bound();