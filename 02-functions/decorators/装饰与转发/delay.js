function log(x){
    console.log(x);
}

function delay(fn, ms){
    return function(){
        setTimeout(() => fn.apply(this, arguments), ms);
      //  setTimeout(fn, ms, ...arguments);
    }
}

let f1000 = delay(log, 1000);
let f2000 = delay(log, 2000);
f1000(12);
f2000(666);