var man = {
    _age: 0,
    age: 13,
    get age(){
       return this._age; 
    },
    set age(value){
        this._age = value;
    }
}

console.log(man.age);
man.age = 12;
console.log(man.age);
