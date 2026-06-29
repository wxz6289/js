// arguments 与命名参数：有默认参数时二者分离

function foo(first, second = 'default') {
  console.log('初始:', first === arguments[0], second === arguments[1]);
  first = 'A';
  arguments[1] = 'B';
  console.log('修改后:', first === arguments[0], second === arguments[1]);
  console.log('second:', second, 'arguments[1]:', arguments[1]);
}

foo('Hello', 'King');

// 非严格模式且无默认参数时，命名参数与 arguments 会同步；
// 存在默认参数时，无论是否严格模式，二者互不影响。
