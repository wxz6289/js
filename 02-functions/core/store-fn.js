// 存储函数

const Store = {
    nextId: 1, 
    cache: {},
    add(fn){
        if(!fn.id){
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        } else {
            return false;
        }
    }
};

function ninja() { };

console.log(Store.add(ninja));
console.log(Store.add(ninja));
