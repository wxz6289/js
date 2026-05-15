let formsMediator = new Mediator(),
    loggingMediator = new Mediator();

(function(formsMediator) {
    function ajaxPost(url, data, callback) {
        let xhr = new XMLHttpRequest(),
            STATE_LOADED = 4,
            STATUS_OK = 200;
            xhr.onreadystatechange = function(){
                if(xhr.readySate !== STATE_LOADED){
                    return;
                }
                if(xhr.status === STATUS_OK){
                    callback(xhr.responseText);
                }
            };
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(data);
        }

        formsMediator.subscribe('form-submit', function(url, formData){
            ajaxPost(url, formData, function(response){
                formsMediator.publish('ajax-response', response);
            });
        });
}(formsMediator));

(function(formsMediator){
    let form = document.getElementById('myForm'), 
        action = form.action,
        data = [],
        fields = form.getElementsByTagName('input'),
        length = fields.length,
        field,
        messageTag = document.createElement('p');
    
    function onFormSubmit(e){
        e.preventDefault();
        for (let index = 0; index < length; index++) {
           field = fields[index];
           data.push(`${escape(field.name)}=${escape(field.value)}`)
        }
        formsMediator.publish('form-submit', action, data.join('&'));
    }

    form.addEventListener('submit', onFormSubmit, false);
    formsMediator.subscribe('ajax-response', function(response){
        messages.innerHTML = response;
        form.parentNode.appendChild(messageTag);
    });

}(formsMediator));

(function(loggingMediator){
    let logs = [];
    loggingMediator.subscribe('log', function(message){
        logs.push({ message, date: new Date() });
    });

    loggingMediator.subscribe('retrieve-log', function(){
        loggingMediator.publish('log-retrieved', logs);
    });
}(loggingMediator));


(function(loggingMediator){
    let button = document.createElement('button');
    button.innerHTML = "Show Logs";
    button.addEventListener('click', function(){
        loggingMediator.publish('retrieve-log');
    });
    loggingMediator.subscribe('log-retrieved', function(logs){
        let length = logs.length,
            ulTag = document.createElement('ul'),
            liTag = document.createElement('li'),
            listItem;
        for (let index = 0; index < length; index++) {
            listItem = liTag.cloneNode(false);
            listItem.innerHTML = `${logs[index].date.toUTCString()}:${logs[index].message}`;
            ulTag.appendChild(listItem);
        }
        document.body.appendChild(ulTag);
    });
    document.body.appendChild(button);
}(loggingMediator));

(function(formsMediator, loggingMediator){
    formsMediator.subscribe("form-submit", function(url){
        loggingMediator.publish('log', `Form submited to ${url}`);
    });
    formsMediator.subscribe('ajax-response', function(response){
        loggingMediator.publish('log', `The Server response to Ajax call with: ${response}`);
    });
}(formsMediator, loggingMediator));