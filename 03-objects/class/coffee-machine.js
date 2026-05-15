/* class CoffeddMachine {
    _waterAmount = 0;
    constructor(power) {
        this._power = power;
        console.log(`Create a coffee-machine, power: ${power}`);
    }

    set waterAmount(value){
        if(value < 0) throw new Error("Negative water");
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }

    get power(){
        return this._power;
    }
}

let cm = new CoffeddMachine(100);
cm.waterAmount = 200;
console.log(cm.waterAmount);
console.log(cm);
console.log(cm.power);
cm.power = 20;
console.log(cm.power); */


/* 
class CoffeeMachine {
    #waterLimit = 200;
    _waterAmount = 0;

    #checkWater(value){
        if (value < 0) throw new Error("Negative water");
        if (value > this.#waterLimit) throw new Error("Too much water");
    } 

    constructor(power) {
        this._power = power;
        console.log(`Create a coffee-machine, power: ${power}`);
    }

    set waterAmount(value) {
        this.#checkWater(value);
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    get power() {
        return this._power;
    }
} */



class CoffeeMachine {
    #waterAmount = 0;
    constructor(power) {
        this._power = power;
        console.log(`Create a coffee-machine, power: ${power}`);
    }

    set waterAmount(value) {
        this.#waterAmount = value;
    }

    get waterAmount() {
        return this.#waterAmount;
    }

    get power() {
        return this._power;
    }
}

class MegaCoffeemachine extends CoffeeMachine {
    getWaterAcount(){
        let filed = "#waterAmount";
        return this[filed];
       // return this.#waterAmount;
    }
}

let cm = new MegaCoffeemachine(100);
cm.waterAmount = 200;
console.log(cm.getWaterAcount());





