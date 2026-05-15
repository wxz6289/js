class Clock {
    tick(ms = 1000) {
        setInterval(() => {
            let d = new Date();
            let current = [d.getHours(), d.getMinutes(), d.getSeconds()];
            let show = current.reduce((pre, cur) => {
                return String(pre).padStart(2, '0') + ":" + String(cur).padStart(2, '0');
            })
            console.log(show);
        }, ms);
    }
}

module.exports = Clock;
