class SimpleFactory {
  static createPizza(type) {
    let pizza;
    if (type == 'cheese') {
      pizza = new CheesePizza();
    } else if (type == 'prepperoni') {
      pizza = new PepperoniPizza()
    } else {
      pizza = new ClamPizza()
    }
  }
}

class PizzaStore {
  factory;
  constructor(factory) {
    this.factory = factory;
  }

  orderPizza(type) {
    let pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}