"use strict";

function foo() {
  console.log(this?.bar, this?.baz);
}

var bar = 23;
const baz = 12;

const obj = {
  bar: "32",
  baz: 21,
  foo,
};

const obj2 = {
  bar: "322",
  baz: 212,
};

foo();
obj.foo();
obj.foo.call(obj2);