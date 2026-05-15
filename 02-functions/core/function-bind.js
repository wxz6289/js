/* var a = {
    x: 42,
    gexX: function(){
        return this.x;
    }
}

var b = a.gexX; // = function(){
//     this.x
// } 
console.log(a.gexX());
console.log(b()); */


function sum( a, b, c){
    console.log(this);
    console.log(a, b, c);
    return "hahha";
    //return a + b + this.c;
}

let a = {
    c: 12
};
let c = sum.bind(a, 12, 23);
console.log(c(21));
