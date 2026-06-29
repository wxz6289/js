// 普通函数作为方法：this 指向调用对象；箭头函数：this 取定义时的词法 this

this.garlic = true;

const soup = {
  garlic: false,
};

soup.hasGarlic = function () {
  console.log(this.garlic); // false — this 是 soup
};

soup.hasGarlic();

soup.hasGarlic = () => console.log(this.garlic); // true — 箭头函数继承外层（全局）this

soup.hasGarlic();
