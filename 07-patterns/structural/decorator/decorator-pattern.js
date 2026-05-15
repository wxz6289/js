var FormFiled = function(type, displayText ) {
    this.type = type || "text";
    this.displayText = displayText || ""; 
};

FormFiled.prototype = {
    createElement: function() {
        this.element = document.createElement("input");
        this.element.setAttribute("type", this.type);
        this.element.setAttribute("placeholder", this.displayText);
        return this.element;
    },

    isValid: function() {
        return this.element.value !== "";
    }
};

var FormFiledDecorator = function(formFiled) {
    this.formFiled = formFiled;
}

FormFiledDecorator.prototype = {
    createElement: function() {
        this.formFiled.createElement();
    },
    isValid: function() {
        return this.formFiled.isValid();
    }
};

var MaxLengthFiledDecorator = function(formFiled, maxLength) {
    FormFiledDecorator.call(this, formFiled);
    this.maxLength = maxLength || 100;
};

MaxLengthFiledDecorator.prototype = new FormFiledDecorator();
MaxLengthFiledDecorator.prototype.createElement = function() {
    var element = this.formFiled.createElement();
    element.setAttribute("maxLength", this.maxLength);
    return element;
};

var AutoCompleteFiledDecorator = function(formFiled, autoComplete) {
    FormFiledDecorator.call(this, formFiled);
    this.autocomplete = autoComplete || "on";
}

AutoCompleteFiledDecorator.prototype = new FormFiledDecorator();
AutoCompleteFiledDecorator.prototype.createElement = function() {
    var element = this.formFiled.createElement();
    element.setAttribute("autocomplete", this.autocomplete);
    return element;
};