// Function.caller：调用当前函数的函数（非标准，严格模式不可用，已废弃）

function a(e, d, b = '', ...c) {
  if (a.caller == null) {
    console.log('全局环境调用');
  } else {
    console.log(a.caller.name, '调用了 a');
  }
  console.log('length:', a.length);
}

function b() {
  a();
}

b();
