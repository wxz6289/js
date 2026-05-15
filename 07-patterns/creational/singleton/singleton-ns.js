var  Project = {
    data: {
        ajax: {
            get: function(url, callback) {
                var xhr = new XMLHttpRequest(),
                       STATE_LOADED = 4,
                       STATUS_OK = 200;
                xhr.onreadystatechange = function() {
                    if(xhr.readyState !== STATE_LOADED) {
                        return;
                    }
                    if(xhr.status === STATUS_OK) {
                        callback(xhr.responseText);
                    }
                };
                xhr.open("GET", url);
                xhr.send();        
            }
        }
    }
};

Project.data.cookie = {
    get: function(name){
        var output = "",
        escapedName = escape(name),
        start = document.cookie.indexOf(escapedName + "="),
        end = document.cookie.indexOf(";", start);
        end = end === -1 ? (document.cookie.length - 1) : end;
        if(start >= 0) {
            output = document.cookie.substring(start + escapedName.length + 1, end);
        }
        return unescape(output);
    },
    set: function(name, value) {
        document.cookie = escape(name) + "=" + escape(value);
    }
};

Project.data.ajax.get("http://localhost:8888/banner", function(respones) {
    console.log("Respones ", respones);
});

Project.data.cookie.set("company", "Nokia");
Project.data.cookie.set("file", "index.html");
console.log(Project.data.cookie.get("company"), Project.data.cookie.get("file"));