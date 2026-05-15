/* function * sayFullName(){
    let firstName = yield; //yield 没有发送任何值，调用next将返回undefined
    let lastName = yield;
    console.log(firstName, lastName);
}

let fullName = sayFullName();
let test = fullName.next(); // undefined 暂停
console.log(test);
fullName.next("King"); // 恢复执行，并用传入值替换yield, 暂停
fullName.next("Dreamer"); // 恢复执行，并用传入值替换第二个yield,执行之后的语句 */

/* function* ninjiaGen() {
    yield "Yoshi";
    return "Hattori";
}

const ninjias = [];

// for (const nin of ninjiaGen()) {
//     ninjias.push(nin);
// }
const ninjiaIterator = ninjiaGen();
let item;
while (!(item = ninjiaIterator.next()).done) {
    ninjias.push(item.value);
}

console.log(ninjias); */

function* genNumber(val) {
    val = yield val * 2;
    yield val;
}

let generator = genNumber(2);
let a = generator.next(3).value;
let b = generator.next(5).value;
console.log(a, b)