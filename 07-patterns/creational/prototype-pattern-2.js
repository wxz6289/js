var field = {
    type: "",
    displayText: "",
    getElement: function() {
        var field = document.createElement("input");
        field.setAttribute("type", this.type);
        field.setAttribute("placeholder", this.displayText);
        return field;
    }
},

textField = Object.create(field, {
    "type": {
        value: "text",
        enumerable: true
    },
    "displayText": {
        value: "Enter your name",
        enumerable: true
    }
}),

emailField = Object.create(field, {
    "type": {
        value: "email",
        enumerable: true
    },
    "displayText": {
        value: "Enter your email address",
        enumerable: true
    }
});

window.addEventListener("load", function() {
    var body = document.body;
    body.appendChild(textField.getElement());
    body.appendChild(emailField.getElement());
}, false);