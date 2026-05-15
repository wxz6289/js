let eventMixin = {
    // 订阅事件
    on(eventName, handler){
        if(!this._eventHandles) this._eventHandles = {};
        if(!this._eventHandles[eventName]) {
            this._eventHandles[eventName] = [];
        }
        this._eventHandles[eventName].push(handler);
    },
    //取消订阅
    off(evenNanme, handler){
        let handlers = this._eventHandles && this._eventHandles[eventName];
        if(!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if(handlers[i]===handler){
                handlers.splice(i--, 1);
            }
        }
    },
    trigger(eventName, ...args){
        if(!this._eventHandles || !this._eventHandles[eventName]){
            return;
        }
        this._eventHandles[eventName].forEach(handler => handler.apply(this, args));
    }
};


class Menu {
    choose(value){
        this.trigger("select", value);
    }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on("select", value => console.log(`Value selected: ${value}`));
menu.choose("123");

