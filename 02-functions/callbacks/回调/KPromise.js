// promise的三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function INTERNAL() { }
function isFn(fn) {
    return typeof fn === "function"
}
function isObj(obj) {
    return typeof obj === "object";
}


function KPromise(exector) {
    if(!isFn(exector)){
        throw new TypeError("exector must be a function")
    }
    this.state = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.queue = [];
    if(exector !== INTERNAL){
        saftyResolveThen(this, exector);
    }
}

function saftyResolveThen(self, exector) {
    let called = false;
    try {
        exector(function(value){
            if(called){
                return;
            }
            called = true;
            doResolve(self, value);
        }, function(err){
            if(called){
                return;
            }
            called = true;
            doReject(self, error);
        })
    } catch(e) {
        if(called){
            return;
        }
        doReject(self, error);
    }
}

function doResolve(self, value){
    try{
        const then = getThen(value);
        if(then){
            saftyResolveThen(self, then);
        } else {
            self.state = FULFILLED;
            self.value = value;
            self.queue.forEach(function(queueItem){
                queueItem.callFulfiled(value);
            })
        }
        return self;
    }catch(err) {
        return doReject(self, err)
    }
}

function doReject(self, error){
    self.state = REJECTED
    self.value = error;
    self.queue.forEach(function(queueItem){
        queueItem.callRejected(error);
    });
    return self;
}

function getThen(promise){
    const then = promise && promise.then;
    if((promise && isObj(promise) || isFn(promise)) && isFn(then)){
        return function applyThen(){
            then.apply(promise, arguments);
        }
    }
}

KPromise.prototype.then = function(onFulfiled, onRejected) {
    if((!isFn(onFulfiled) && this.state === FULFILLED)||(!isFn(onRejected) && this.state === REJECTED)) {
        return this;
    }
    const promise = new this.constructor(INTERNAL);
    if(this.state !== PENDING){
        const resolver = this.state === FULFILLED ? onFulfiled: onRejected;
        unwrap(promise, resolver, this.value);
    } else {
        this.queue.push(new QueueItem(promise, onFulfiled, onRejected));
    }
    return promise;
}

function QueueItem(promise, onFulfiled, onRejected){
    this.promise = promise;
    this.callFulfiled = function(value){
        doResolve(this.promise, value);
    }
    this.callRejected = function(error){
        doReject(this.promise, error);
    }
    if(isFn(onFulfiled)) {
        this.callFulfiled = function(value) {
            unwrap(this.promise, onFulfiled, value);
        }
    }
    if(isFn(onRejected)) {
        this.callRejected = function(error) {
            unwrap(this.promise, onRejected, error);
        }
    }
}

function unwrap(promise, func, value) {
    promise.nextTick(function(){
        let returnValue;
        try {
            returnValue = func(value);
        } catch(error) {
            return doReject(promise, error);
        }
        if(returnValue === promise) {
            doReject(promise, new TypeError("Cann't resolve promise with itself!"));
        } else {
            doResolve(promise, returnValue);
        }
    })
}

KPromise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
}

KPromise.resolve = function (value) {
    if(value instanceof this){
        return value;
    }
    return doReject(new this(INTERNAL), value);
}

KPromise.reject = function (reason) {
    return doReject(new this(INTERNAL), reason)
}

KPromise.all = function (iterable) {
    const self = this;
    if(!Array.isArray(iterable)){
        return this.reject(new TypeError("must be an array!"));
    }
    const len = iterable.length;
    let called = false;
    if(!len){
        return this.resolve([]);
    }
    const values = new Array(len);
    let resolved = 0;
    let i = -1;
    const promise = new this(INTERNAL);

    while(++i < len){
        allResolver(iterable[i],i);
    }
    return promise;

    function allResolver(value, i) {
        self.resolve(value).then(resoveFromAll, function(error){
            if(!called){
                called = true;
                doReject(promise, error);
            }
        })

        function resolveFromAll(outValue){
            values[i] = outValue;
            if(++resolved === len && called) {
                called = true;
                doResolve(promise, values);
            }
        }
    }   
}

KPromise.race = function (iterable) {
    const race = this;
    if(!Array.isArray(iterable)){
        return this.reject(new TypeError("must be an array!"));
    }
    const len = iterable.length;
    let called = false;
    if(!len) {
        return this.resolve([]);
    }
    let i = -1;
    while(++i < len){
        resolver(iterable[i]);
    }
    return promise;

    function resolver(value){
        self.resolve(value).then(function(response){
            if(!called){
                called = true;
                doResolve(promise, response);
            }
        },function(error){
            if(!called){
                called = true;
                doReject(promise, error);
            }
        })
    }   
}



module.exports = KPromise;