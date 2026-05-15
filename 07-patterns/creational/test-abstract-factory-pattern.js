var  supportsHtml5FormFields = (function() {
    var field = document.createElement("input");
        field.setAttribute("type","email");
        return field.type === "email";
}()),

formFactory = supportsHtml5FormFields? new Html5FormFieldFactory(): new Html4FormFieldFactory(),
textField = formFactory.makeField({
    type: "text",
    displayText: "Enter the first line of your address"
}),
emailField = formFactory.makeField({
    type: "email",
    displayText: "Enter your email address"
}),
buttonField = formFactory.makeField({
    type: formFactory.availableTypes.BUTTON,
    displayText: "Submit"
});

window.addEventListener("load", function() {
    var body = document.createDocumentFragment();
    body.appendChild(textField.getElement());
    body.appendChild(emailField.getElement());
    body.appendChild(buttonField.getElement());
    document.body.appendChild(body);
}, false);