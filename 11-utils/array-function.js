/* function* foo() {
  yield () => 23;
}

const it = foo();
console.log(it.next().value()) */

/* const bar = async (a) => {
  return a;
}

bar(12).then((a) => {
  console.log(a);
}); */

const Foo = () => ({ name: 'array' });

class Bar extends Foo {
  log() {
    console.log(this.name);
  }
}

let bar = new Bar();
bar.log();