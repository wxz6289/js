function slice(str, start, end){
    return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';
console.log(slice(str, 1, 3));
console.log(str.slice(1, 3));

