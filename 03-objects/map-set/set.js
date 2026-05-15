let s = new Set(); // new Set() 构造函数不能传基本类型的值，不传或传可迭代对象
s.add(5);
s.add(12);
console.log(s);
s.forEach((value, key, s) => {
    console.log(value, key, s);
});
