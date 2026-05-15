let values = "我是中国人";


let normalized = [...values].map(function (text) {
    return text.normalize();
});

let newValue = normalized.sort(function(fn, sn){
    return fn > sn ? -1 : fn === sn ? 0 : 1;
});


/* let newValue = [...values].sort(function(first, second){
    let fn = first.normalize(),
        sn = second.normalize();
    return fn > sn ? -1 : ( fn === sn ?  0 : 1);
}); */
console.log(newValue);
