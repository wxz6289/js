let user = {
    name: "King",
    sayHi(){
        console.log(`Hi, ${this.name}`);
    }
}

// setTimeout( user.sayHi, 1000);

/* setTimeout(() => {
    user.sayHi();
}, 1000); */

// setTimeout( user.sayHi.bind(user), 1000);


function f() {
    console.log(this);
}

let user2 = {
    g: f.bind(null)
};

user2.g();