// 循环中的闭包：闭包捕获的是变量的「绑定」，而非某次迭代当时的「值」

function run(shooters, label) {
  console.log(`--- ${label} ---`);
  shooters.forEach((fn) => fn());
}

// 错误：var 无块级作用域，所有 shooter 共享同一个 i
function makeArmyBroken() {
  const shooters = [];
  for (var i = 0; i < 3; i++) {
    shooters.push(function () {
      console.log(i);
    });
  }
  return shooters;
}

// 修复一：IIFE 把当前 i 的值传入
function makeArmyIIFE() {
  const shooters = [];
  for (var i = 0; i < 3; i++) {
    shooters.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return shooters;
}

// 修复二：循环体内用 let 复制当前值
function makeArmyCopy() {
  const shooters = [];
  let i = 0;
  while (i < 3) {
    const j = i;
    shooters.push(function () {
      console.log(j);
    });
    i++;
  }
  return shooters;
}

// 修复三：for 循环头用 let，每次迭代创建新的块级绑定
function makeArmyLet() {
  const shooters = [];
  for (let i = 0; i < 3; i++) {
    shooters.push(function () {
      console.log(i);
    });
  }
  return shooters;
}

// var 循环 + 块内 let 复制（for-const.js 中的写法）
function makeArrayWithVar() {
  const array = [];
  for (var i = 0; i < 3; i++) {
    const j = i;
    array[i] = function () {
      console.log(j);
    };
  }
  return array;
}

run(makeArmyBroken(), 'var（错误）');
run(makeArmyIIFE(), 'IIFE');
run(makeArmyCopy(), 'let 复制');
run(makeArmyLet(), 'for let');
run(makeArrayWithVar(), 'var + 块内 let');

