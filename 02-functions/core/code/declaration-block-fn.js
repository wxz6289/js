// 块作用域中的函数声明（历史行为，不推荐依赖）

{
  foo();
  function foo() {
    console.log('块内 foo');
  }
}

foo();
