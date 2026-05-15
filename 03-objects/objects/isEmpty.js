function isEmpty(obj){
    for (const key in obj) {
        if(key){
            return false;
        }
    }
    return true;
}

console.log(isEmpty({}));
console.log(isEmpty(new Object()));
console.log(isEmpty({name: "king"}));

