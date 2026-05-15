function step(value, callback ) {
    console.log(value);
    callback(value)
}

step("step0", function(v1) {
    step(v1+ " step1", function(v2) {
        step(v2 + " step2", function(v3){
            step(v3+ " step3", function(v4){
                console.log(v4)
            })
        })
    })  
})