// bind 简易 polyfill 与构造函数兼容版

// --- 简易版：固定 this + 预设参数 ---
function bindSimple(fn, ctx, ...preset) {
  return function (...args) {
    return fn.apply(ctx, [...preset, ...args]);
  };
}

// --- 兼容 new 的版本 ---
function bindWithNew(fn, ctx, ...preset) {
  if (typeof fn !== 'function') {
    throw new TypeError('bind target is not callable');
  }
  const fBound = function (...args) {
    const isNew = this instanceof fBound;
    return fn.apply(isNew ? this : ctx, [...preset, ...args]);
  };
  if (fn.prototype) {
    fBound.prototype = Object.create(fn.prototype);
  }
  return fBound;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

const BoundPoint = bindWithNew(Point, null, 1, 2);
const p = new BoundPoint();
console.log(p.x, p.y); // 1 2

function greet(greeting, name) {
  return `${greeting}, ${name}`;
}
console.log(bindSimple(greet, null, 'Hello')('World')); // Hello, World
