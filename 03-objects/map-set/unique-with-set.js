function unique(arr = []){
    // return [...new Set(arr)];
    return Array.from(new Set(arr));
}

console.log(unique([11, 2, 33, 4, 2]));
