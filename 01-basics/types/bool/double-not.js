var  user = {
    isAdmin: function() {
        return !!this.admin;
    }
}

console.log(user.isAdmin());

user.admin = true;

console.log(user.isAdmin());

user.admin = false;

console.log(user.isAdmin());
