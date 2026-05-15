function* returnValueGenerator(){
    yield 1;
    return 2; // return会结束迭代，其return的值会被忽略
    yield 3;
};

let results = [];

for (const iterator of returnValueGenerator()) {
    results.push(iterator);
}

console.log(results);


let iterator = returnValueGenerator();

console.log("iterator:", iterator);

let item = iterator.next();
while (!item.done) {
  console.log("result:", item.value);
  item = iterator.next();
}
console.log(iterator.next());

