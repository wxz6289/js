let user = {
    name: "John",
    surname: "Simth",
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
}

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName, admin.isAdmin);

user.fullName = "King Dreamer";
console.log(user.name);
console.log(user.surname);
console.log(admin.fullName, admin.isAdmin);

class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.canEat) return true;
    }
}

let obj = { canEat: true };
console.log(obj instanceof Animal);
