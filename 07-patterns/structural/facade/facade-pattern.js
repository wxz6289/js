function ajaxCall(type, url, callback, data) {
    var xhr = (function(){
        try {
            if(typeof XMLHttpRequest != 'undefined'){
                return new XMLHttpRequest();
            } else if(typeof ActiveXObject != 'undfined') {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }
        } catch(e) {
            throw new Error("No XHR object available.");
        }
    }()),
        STATE_LOADED = 4,
        STATE_OK = 200;
    xhr.onreadystatechange = function() {
        if(xhr.readState !== STATE_LOADED){
            return;
        }
        if(xhr.status === STATE_OK) {
            callback(xhr.responseText);
        }
    };
    xhr.open(type.toUpperCase(), url);
    xhr.send(data);
}