var elements = {
    get: function(tag) {
        var elems = document.getElementsByTagName(tag),
            elemsIndex = 0,
            elemsLength = elems.length,
            output = [];
            for(; elemsIndex < elemsLength; elemsIndex++) {
                output.push(elems[elemsIndex]);
            }
            return output.length === 1 ? output[0] : output; 
    },
    addClass: function(elems, newClassName) {
        var elemsIndex = 0,
              elemsLength = elems.length,
              elem;
        if(Object.prototype.toString.call(elems) === "[object Array]") {
            for(; elemsIndex < elemsLength; elemsIndex++) {
                elem = elems[elemsIndex];
                elem.className += (elem.className === "" ? "" : " " ) + newClassName;
            }
        } else {
            elems.className += (elems.className === "" ? "" : " ") + newClassName;
        }        

    }
};
