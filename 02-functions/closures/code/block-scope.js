// let / const 块级作用域：变量只在声明所在的 { } 内可见

const func = function () {
  if (true) {
    const age = 25;
    console.log('块内:', age); // 25
  }
  console.log(age); // ReferenceError
};

try {
  func();
} catch (e) {
  console.log(e.name); // ReferenceError
}
