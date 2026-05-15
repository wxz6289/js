var  textField = FormFieldFactory.makeField({
    type: "text",
    displayText: "Enter this first line of your address"
}),

emailField = FormFieldFactory.makeField({
    tyep: "email",
    displayText: "Enter your email address"
}),

buttonField = FormFieldFactory.makeField({
    type: "button",
    displayText: "Submit"
});

window.addEventListener("load", function() {
    var body = document.createDocumentFragment();
    body.appendChild(textField.getElement());
    body.appendChild(emailField.getElement());
    body.appendChild(buttonField.getElement());
    document.body.appendChild(body)
})