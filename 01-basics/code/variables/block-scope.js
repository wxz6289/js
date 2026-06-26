// let / const 块级作用域 vs var

{
  let a = 10;
  const b = 8;
  var c = 20;
  console.log(a, b, 'inner');
}
console.log(c); // 20 — var 穿透块；a、b 在块外不可访问

// let 与后续同名 function 声明：块外仍解析为函数
function a() {
  return 30;
}
console.log(a()); // 30

// for 头部 let 每轮新绑定；循环体内可声明同名变量遮蔽头部（初始化不引用自身）
const funcs = {};
for (let j = 0; j < 3; j++) {
  let label = `iter-${j}`;
  funcs[label] = () => console.log(label);
}
funcs['iter-0'](); // iter-0

// 默认参数：引用尚未声明的标识符会触发 TDZ
// function bar(x = y, y = 2) { return [x, y]; } // ReferenceError
function bar2(x = 2, y = x) {
  return [x, y];
}
console.log(bar2()); // [2, 2]

// var 可先引用自身（提升后为 undefined）；let 不行
var z = z;
console.log(z); // undefined
