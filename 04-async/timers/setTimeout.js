function sayHi(phrase, who){
    console.log(phrase, who);
}
setTimeout(sayHi, 1000, "Hello", "King");

/* let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000);
}, 2000); */

let timerId2 = setInterval(() => console.log('tick'), 2000);