let k1 = {name: "haha"};
let kb = k1;
let k2 = {};
let ws = new WeakSet([k1, k2]);
console.log(ws.has(k1));
k1 = null;
console.log(ws.has(kb));
// console.log(ws.has(k1));

/* for (const s of ws) {
    console.log(s);   
} */

