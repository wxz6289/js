var ninja = {
    /* sum: function(){
        switch (arguments.length) {
            case 1:
                return sum1(arguments[0])
            case 2:
                return sum2(arguments[0], arguments[1]);
            
            case 3:
                return sum3(arguments[0], arguments[1], arguments[2]);
            
            case 4:
                return sum4(arguments[0], arguments[1], arguments[2], arguments[3]);   
            default:
                break;
        }
    } */
}

function addMethod(obj, name, fn){
    let old = obj[name];
    obj[name] = function(){
        if(fn.length == arguments.length){
            return fn.apply(this, arguments);
        } else if(typeof old == 'function') {
            return old.apply(this, arguments);
        }
    }
}

addMethod(ninja, 'sum', function(a){
   return a; 
});

addMethod(ninja, 'sum', function (a, b) {
    return a + b;
});

addMethod(ninja, 'sum', function(a, b, c){
   return a + b + c; 
});

/* function sum1(a) {
    return a;
}

function sum2(a, b){
    return a + b;
}

function sum3(a, b, c) {
    return a + b + c;
}

function sum4(a, b, c, d) {
    return a + b + c + d;
} */


console.log(ninja.sum(2));
console.log(ninja.sum(2, 3));
console.log(ninja.sum(2, 1, 5));
console.log(ninja.sum(2, 4, 6, 9));

