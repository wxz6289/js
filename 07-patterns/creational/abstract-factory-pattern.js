function FormFieldFactory() {
    this.availableTypes = {
        TEXT: "text",
        EMAIL: "email",
        BUTTON: "button"
    };
}

FormFieldFactory.prototype = {
    makeField: function() {
        throw new Error("This method should not be called directly!");
    }
};

function Html5FormFieldFactory() {};
Html5FormFieldFactory.prototype = new FormFieldFactory();
Html5FormFieldFactory.prototype.makeField = function(options) {
    var options = options || {},
          type = options.type || this.availableTypes.TEXT,
          displayText = options.displayText || "",
          field;
    switch(type) {
        case this.availableTypes.TEXT: 
            field = new Html5TextField(displayText);
            break;
        case this.availableTypes.EMAIL:
            field = new Html5EmailField(displayText);
            break;
        case this.availableTypes.BUTTON:
            field = new ButtonField(displayText);
            break;
        default:
           throw new Error("Invalid field type specied: " + type);
            break;
    } 
    return field;     
};

function Html4FormFieldFactory() {}
Html4FormFieldFactory.prototype = new FormFieldFactory();
Html4FormFieldFactory.prototype.makeField = function (options) {
    var options = options || {},
        type = options.type || this.availableTypes.TEXT,
        displayText = options.displayText || "",
        field;

    switch (type) {
        case this.availableTypes.TEXT:
        case this.availableTypes.EMAIL:
            field = new Html4TextField(displayText);
            break;
        case this.availableTypes.BUTTON:
            field = new ButtonField(displayText);
            break;
        default:
            throw new Error("Invalid field type specied: " + type);
            break;
    }
    return field;
};

function Html5TextField(displayText) {
    this.displayText = displayText || "";
}

Html5TextField.prototype.getElement = function() {
    var textField = document.createElement("input");
    textField.setAttribute("type", "text");
    textField.setAttribute("placeholder", this.displayText);
    return textField;
}

function Html5EmailField(displayText) {
    this.displayText = displayText || "";
}

Html5EmailField.prototype.getElement = function () {
    var emailField = document.createElement("input");
    emailField.setAttribute("type", "email");
    emailField.setAttribute("placeholder", this.displayText);
    return emailField;
}

function Html4TextField(displayText) {
    this.displayText = displayText || "";
}

Html4TextField.prototype.getElement = function () {
    var wrapper = document.createElement("div"),
          textFieldId = "text-field" + Math.floor(Math.random()*999),
          label =   document.createElement('label'),
          labelText = document.createTextNode(this.displayText),
          textField = document.createElement("input");
          textField.setAttribute("type", "text");
          textField.setAttribute("id", textFieldId);
          label.setAttribute("for", textField);
          label.appendChild(labelText);
          wrapper.appendChild(textField);
          wrapper.appendChild(label);
    return wrapper;
};



function ButtonField(displayText) {
    this.displayText = displayText || "";
}
ButtonField.prototype.getElement = function () {
    var buttonField = document.createElement("button");
    buttonField.setAttribute("type", "submit");
    buttonField.innerHTML = this.displayText;
    return buttonField;
};