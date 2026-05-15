function truncate(str, maxLength){
    if(typeof str !== "string") throw new Error("str must be string!");
    if(!str ) return str;
    let len = str.length;
    if(len > maxLength){
        return `${str.substring(0, maxLength - 1)}...`;
    } else {
        return str;
    }
}


let t1 = truncate("What I'd like to tell on this topic is:", 20);

let t2 = truncate("Hi everyone!", 20);

console.log(t1);
console.log(t2);
