function Log() {
    let count = 0;
    const add = () => { 
        count++;
    }
    const show = () => count;
    return {
        add,
        show
    }
}

let l = Log();
l.add();
console.log(l.show());

