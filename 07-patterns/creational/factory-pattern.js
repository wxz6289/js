/* 
使用工厂模式，可以实现不指定特定的“类”而创建对象
工厂模式封装了对象的创建过程，不再需要手动使用new关键字来创建实例
*/

var FormFieldFactory = {
    makeField: function(options) {
        var options = options || {},
            type = options.type || 'text',
            displayText = options.displayText || '',
            field;
        switch (type) {
            case "text":
                field = new TextField(displayText);
                break;
            case "email":
                field = new EmailField(displayText);
                break;
            case "button":
                field = new ButtonField(displayText); 
                break;   
                default:
                field = new TextField(displayText);
                break;
        }
        return field;     
    }
};

function TextField(displayText) {
    this.displayText = displayText;
}

TextField.prototype.getElement = function() {
    var textField = document.createElement('input');
    textField.setAttribute("type", "text");
    textField.setAttribute("placeholder", this.displayText);
    return textField;
};

function EmailField(displayText) {
    this.displayText = displayText;
}

EmailField.prototype.getElement = function() {
    var emailField = document.createElement("input");
    emailField.setAttribute("type", "email");
    emailField.setAttribute("placeholder", this.displayText);
    return emailField;
};

function ButtonField(displayText) {
    this.displayText = displayText;
}

ButtonField.prototype.getElement = function() {
    var buttonField = document.createElement("button");
    buttonField.setAttribute("type", "button");
    buttonField.innerHTML = this.displayText;
    return buttonField;
};
