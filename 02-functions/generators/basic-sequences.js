// 生成器基础序列：平方、字母表、布尔切换

function* sq(initValue = 2) {
  let step = 0;
  while (true) {
    yield initValue * step++;
  }
}

const sequence = sq(20);
console.log('sq:', sequence.next().value, sequence.next().value);

function* alphabet() {
  let charCode = 65;
  while (charCode < 91) {
    yield String.fromCharCode(charCode++);
  }
}

console.log('alphabet:');
for (const letter of alphabet()) {
  process.stdout.write(letter + ' ');
}
console.log();

const toggle = (function* () {
  while (true) {
    yield true;
    yield false;
  }
})();

console.log('toggle:', [0, 1, 2, 3, 4].map(() => toggle.next().value));
