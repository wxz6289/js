/* function aclean(strArr){
    let result = [];
    let s = new Set();
    for (let i = 0, len = strArr.length; i < len; i++) {
        let str = strArr[i].toLowerCase().split('').sort().join();
        if(!s.has(str)){
            result.push(strArr[i]);
            s.add(str);
        }
    }
    return result;
} */

function aclean(strArr){
    let m = new Map();
    for (const word of strArr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        m.set(sorted, word);
    }
    return Array.from(m.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));
