let obj = {a: 1},
    handlers = {
        get(target, key, context) {
            console.log(`access: ${key}`);
            return Reflect.get(target, key, context);
        }
    };
let proxy = new Proxy(obj, handlers);
console.log(obj.a);
console.log(proxy.a);


