// new Function：运行时由字符串创建函数，[[Environment]] 指向全局

const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));

const sum2 = new Function('a, b', 'return a + b'); // 历史逗号分隔形参写法
console.log(sum2(5, 6));

function getFunc() {
  const value = 'test';
  const closure = function () {
    console.log(value); // 普通函数表达式可闭包外部变量
  };
  // const dynamic = new Function('console.log(value)'); // ReferenceError
  return closure;
}

getFunc()();
