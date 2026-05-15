/* function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello" + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Kely"
}

var you = {
    name: "king"
}

 var aa = identify.call(me);
 console.log(aa);
 aa = identify.call(you);
 console.log(aa);
speak.call(me);
speak.call(you); */





function identify(bian) {
    return bian.name.toUpperCase();
}

function speak(cc) {
    var greeting = "Hello" + identify(cc);
    console.log(greeting);
}

var me = {
    name: "Kely"
}

var you = {
    name: "king"
}

 var aa  = identify(me)
 console.log(aa);
 aa = identify(you);
 console.log(aa);
speak(me);
speak(you);