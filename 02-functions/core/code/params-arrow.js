// 箭头函数：this / arguments / 构造 / 简写返回值

var id = 21;

function foo() {
  setTimeout(() => {
    console.log('arrow this.id:', this.id);
  }, 10);
  setTimeout(function () {
    console.log('regular this.id:', this.id);
  }, 20);
}

foo.call({ id: 42 });

const sum = (n1, n2) => n1 + n2;
console.log(sum.name, sum(2, 3));

const returnObject = (m, n) => ({ m, n });
console.log(returnObject(2, 3));

// 无括号时 { } 被解析为语句块，不是对象字面量
const broken = () => { a: 1 };
console.log(broken()); // undefined

// 箭头函数注意：
// 1. this 取定义时所在词法环境
// 2. 不能 new
// 3. 无 arguments（可用 rest）
// 4. 不能 yield，不能作 generator
