function *gen(val){
    val = yield val * 3;
    yield val;
}

let g = gen(2);

let g1 = g.next(4);
let g2 =  g.next(3); // g.next(3);

console.log("g1:", g1);
console.log("g2:", g2);


