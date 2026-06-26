'use strict';

// 严格模式下顶层 var 仍会挂到全局对象
var a = 12;
console.log(globalThis.a); // 12
