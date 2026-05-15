function fakeJoin(arr, seperateor) {
    let str = '';
    for (let i = 0, len = arr.length; i < len; i++) {
       if(i > 0) {
           str += seperateor;
       } 
       if(arr[i] !== undefined) {
           str += arr[i];
       }
    }
    return str;
}

let a = Array(4);

console.log(fakeJoin(a, '-'));
