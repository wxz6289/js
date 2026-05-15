/* let i = 0
const time = setInterval(function () {
    i++;
    i >= 5 && time && clearInterval(time);
    console.log(i)
}, 1000)
 */

function time(i) {
    if (i > 5) return
    setTimeout(() => {
        console.log(i);
        i++;
        time(i)
    }, 1000);
}

time(1);

/* for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
} */