let user = {
    name: "King",
    toString(){
        return this.name;
    }
}

Object.defineProperty(user, "toString", {
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.defineProperty(user, "age", {value: 23, configurable: false, enumerable: true, writeable: true});
console.log(user);

for (const prop in user) {
    console.log(prop);
}

let des = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(des);
