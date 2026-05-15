let animal = {
    eat: function(){
        console.log("animat eat");
    }
};

let rabbit = {
    __proto__: animal,
    eat: function(){
        super.eat(); //[[HomeObject]]属性未设置，并且继承不起作用
    }
};

rabbit.eat();