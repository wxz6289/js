var user = new Proxy({}, {
    get: function(target, prop){
        console.log(target, prop, "get");
        if(prop == 'fullName'){
            return `${target.fname} ${target.lname}`; 
        }
    },
    set: function(target, prop) {
        console.log(target, prop, "set")
        if(prop == 'fullName'){
            target.fname = "test";
            target.lname = "hahah"
        }
    }
});

user.fname = "Wang";
user.lname = "xiangzhao";
console.log(user.fullName, ">>>");
user.fullName = "hahah kkii"
console.log(user);