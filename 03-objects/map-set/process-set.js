let processor = { 
    output(value){
        console.log(value);
    }, 
    process(set = new Set()){
        set.forEach(value => {
            this.output(value);
        });
    }
}

let s = new Set([2, 32]);

processor.process(s);