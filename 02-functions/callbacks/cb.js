function step(value, callback ) {
    console.log(value);
    callback(value)
}

step("step0", function(v1) {
    step(v1+ " step1", function(v2) {
        console.log(v2)
    })
})