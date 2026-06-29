// 静态方法与静态属性；静态方法可继承

class User {
  static staticMethod() {
    console.log(this === User);
  }
}
User.staticMethod(); // true

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static publisher = 'Ilya Kantor';

  static compare(a, b) {
    return a.date - b.date;
  }

  static createTodays() {
    return new this("Today's digest", new Date());
  }
}

const articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];
articles.sort(Article.compare);
console.log(articles.map((a) => a.title));

const today = Article.createTodays();
console.log(today.title, Article.publisher);

// 静态继承：子类的 __proto__ 指向父类
class Animal {}
class Rabbit extends Animal {}

console.log(Rabbit.__proto__ === Animal); // true
console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true
console.log(Animal.__proto__ === Function.prototype); // true
