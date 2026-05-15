/* 
判断两个值是否相等
*/
export default function is(a, b){
    // 检测-0
    if(a === 0 && b === 0){
        return 1/a === 1/b
    }

    if(a === b){
        return true;
    }
    // 检测NaN
    if(a !== a){
        return b !== b;
    }
    // 其他情况
    return a === b;

}
