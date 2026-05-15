/* function printNumber(from, to){
    let temp = from;
    let intervalId = setInterval(() => {
        console.log(temp);
        if(temp == to) {
            clearInterval(intervalId);
        }
        temp++;
    }, 1000);
}
 */
/* 
 function printNumber(from, to){
    let temp = from;
     setTimeout(function log() {
         console.log(temp);
         if(temp < to){
            setTimeout(log, 1000);
        }
        temp++;
     }, 1000);
 }



printNumber(2, 6); */

let i = 0;
let start = Date.now();

/* function count(){
    if(i == 10000000){
        console.log(`Done in ${Date.now() - start} ms`);
    } else {
        setTimeout(count, 0);
    }
    for (let j = 0; j < 100000; j++) {
        i++;   
    }
}
 */

function count() {
    if (i == 10000000) {
        console.log(`Done in ${Date.now() - start} ms`);
        clearInterval(id);
    }
    for (let j = 0; j < 100000; j++) {
        i++;
    }
}

let id = setInterval(count, 0);
