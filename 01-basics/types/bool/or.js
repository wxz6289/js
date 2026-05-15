var Car = function() {
    var args = Array.prototype.slice.call(arguments);
    this.name = args[0] || 'tesla';
    this.mpg = args[1] || 100;
    this.mph = args[2] || 80;
    console.log(this.name, this.mpg, this.mph);
}

new Car("volt", 70);