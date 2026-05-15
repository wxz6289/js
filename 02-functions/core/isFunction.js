function isFunction(fn){
   // return typeof fn === "function"; //具有浏览器兼容问题 对某些DOM对象会失效
   //不直接调用对象上的toString()方法是因为对象有可能自己重写了这个方法
    return fn && Object.prototype.toString.call(fn) === "[object Function]"
}