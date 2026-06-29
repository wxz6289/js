// 递归引用：this、具名内联函数、arguments.callee

const ninja = {
  // 使用 this 引用方法自身（推荐）
  chirpWithThis: function (n) {
    return n === 1 ? 'chirp' : this.chirpWithThis(n - 1) + '-chirp';
  },

  // 具名函数表达式：名称仅在函数体内可见
  chirp2: function chirp2(n) {
    return n === 1 ? 'chirp' : chirp2(n - 1) + '-chirp';
  },

  // arguments.callee（严格模式禁用，不推荐）
  chirp: function (n) {
    return n === 1 ? 'chirp' : arguments.callee(n - 1) + '-chirp';
  },
};

const backup = ninja;
// ninja = {}; // 解引用后 arguments.callee 仍可工作，this 写法在解绑后会失败

console.log(backup.chirpWithThis(3));
console.log(backup.chirp2(3));
console.log(backup.chirp(3));

// 具名函数表达式：内联名称 b 与外部变量 b 是不同绑定
const b = function a() {
  console.log(b === a); // true — 函数体内 a 指向自身
};
b();
