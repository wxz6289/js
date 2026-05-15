function createProxy(subject){
    const proto = Object.getPrototypeOf(subject);
    function Proxy(subject){
        this.subject = subject;
    }
    Proxy.prototype = Object.create(proto);
    Proxy.prototype.hello = function(){
        return this.subject.hello() + 'wolrd!';
    }
    Proxy.prototype.goodbtye = function () {
        return this.subject.goodbtye.apply(this.subject, arguments);
    };
    return new Proxy(subject);
}

module.exports = createProxy;