const Clock = require('./clock');

class ExtendedClock extends Clock {
    constructor(precision = 1000) {
        super();
        this.precision = precision;
    }

    tick(){
        super.tick(this.precision)
    }
}

let c = new ExtendedClock(2000);
c.tick();