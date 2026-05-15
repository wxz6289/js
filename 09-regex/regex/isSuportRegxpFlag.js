// 判断引擎是否支持某些正则修饰符
function isSuportRegxpFlag(flag) {
    try {
        let pattern = new RegExp(".", flag);
        return true;
    } catch(e) {
        return false;
    }
}

console.log(isSuportRegxpFlag('y'));
