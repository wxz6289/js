let store = {
    nextId: 1,
    cache: {},
    add: function(fn){
        if(!fn.id){
            fn.id = store.nextId++;
            return !!(store.cache[fn.id] = fn);
        }
    }
};

function a(){
    console.log("a");
}

function b() {
    console.log("b");
}

console.log(store.add(a));
console.log(store.add(b));
console.log(store.add(a));
console.log(store.cache);


var nums = {
    length: 0,
    add: function(el){
        Array.prototype.push.call(this, el);
    },
    gather: function(id){
        this.add(document.getElementById(id));
    }
}
