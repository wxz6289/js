var  formBuilder = new FormBuilder(),
        form;
formBuilder.addField("text", "Enter your name");
formBuilder.addField("email", "Enter your email address");
formBuilder.addField("button", "Submit");        

form = formBuilder.getForm();

window.addEventListener("load", function(){
    document.body.appendChild(form);
}, false);