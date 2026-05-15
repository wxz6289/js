function Person(name){
    this.name = name;
    this.sayName = function(){
        return "Hello " + this.name;
    }
    return "Haha";
}

// 1. new Object() {} 
// 2. this->该对象
// 2. 初始化操作 添加属性和方法
// 3. 返回这个对象 

let p = new Person("King");
console.log(p);


console.log(Person("Panpan"));

console.log(p.sayName());

