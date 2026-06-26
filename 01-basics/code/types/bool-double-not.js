// !! 将任意值转为布尔

const user = {
  isAdmin() {
    return !!this.admin;
  },
};

console.log(user.isAdmin()); // false
user.admin = true;
console.log(user.isAdmin()); // true
user.admin = false;
console.log(user.isAdmin()); // false
