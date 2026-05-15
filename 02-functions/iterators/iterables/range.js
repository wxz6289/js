let range = {
    from: 1,
    to: 10,
    [Symbol.iterator](){ //迭代器与迭代对象分离
        return {
            current: this.from,
            last: this.to,
            next(){
                if(this.current <= this.last){
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        }
    }
};

for (const num of range) {
    console.log("1:", num);
}

for (const num of range) {
    console.log("2:", num);
}

let r = Array.from(range, num => num * num);
console.log(r);
