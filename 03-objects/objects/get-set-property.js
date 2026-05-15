let user = {
    name: "John",
    surname: "Simth",
    get fullName(){
        return `${this.name} ${this.surname}`;
    },
    set fullName(value){
        [this.name, this.surname] = value.split(' ');
    }
}

user.fullName = "King Dreamer";
console.log(user.name);
console.log(user.surname);
