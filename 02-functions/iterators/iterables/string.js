let str = "Hello𝒳😂"

for (const char of str) {
    console.log(char);
}

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if(result.done){
        break;
    }
    console.log("> ", result.value)
}