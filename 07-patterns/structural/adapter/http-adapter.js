var  http = {
    makeRequest: function(type, url, callback, data) {
        var xhr = new XMLHttpRequest(),
              STATE_LOADED = 4,
              STATUS_OK = 200;
        xhr.onreadystatechange = function() {
            if(xhr.readyState !== STATE_LOADED ) {
                return;
            }
            if(xhr.status === STATUS_OK) {
                callback(xhr.responseText);
            }
        };
        xhr.open(type.toUpperCase(), url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);   
    }
};

/* http
    .makeRequest("get", "http://localhost:8888/banner", function (response) {
    console.log("Http response received:", response);
});

http
    .makeRequest("post", "http://localhost:8888/banner", function (response) {
    console.log("Http Post :", response);
}, "href=https://www.meizu.com/products/meilane3/summary.html&imgUrl=https://fms.res.meizu.com/dms/2018/03/21/37f4e79a-2ea4-4d27-97c4-0563e793ce48.jpg&"+
"name=魅蓝E3新品发布&theme=blue&order=3"); */

var  Project = {
    data: {
        ajax: (function() {
            function createXHR(callback) {
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
                return xhr;        
            }
            return {
                get: function(url, callback) {
                    var xhr = createXHR(callback);
                    xhr.open("GET", url);
                    xhr.send();
                },
                post: function(url, data, callback) {
                    var xhr = createXHR(callback);

                    xhr.open("POST", url);
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhr.send(data);
                }
            };
        }())
    }
};

/* Project
    .data
    .ajax
    .get('http://localhost:8888/banner', function (response) {
    console.log("Project Get: ", response);
});

Project
    .data
    .ajax
.post("http://localhost:8888/banner", "href=https://www.meizu.com/products/meilane3/summary.html&imgUrl=https://fms.res" +
            ".meizu.com/dms/2018/03/21/37f4e79a-2ea4-4d27-97c4-0563e793ce48.jpg&name=魅蓝E3新品发布" +
            "&theme=blue&order=3",
    function (response) {
        console.log("Project Post :" , response);
    }); */

 function httpToAjaxAdapter(type, url, callback, data) {
        if(type.toLowerCase() == "get") {
            Project.data.ajax.get(url, callback);
        } else if( type.toLowerCase() == "post") {
            Project.data.ajax.post(url, data, callback);
        }
    }

    http.makeRequest = httpToAjaxAdapter;

http
    .makeRequest("get", "http://localhost:8888/banner", function (response) {
        console.log("Adapter GET response", response);
    });

http
    .makeRequest("post", "http://localhost:8888/banner ", function (response) {
        console.log("Adapter POST response",  response);
},
"href=https://www.meizu.com/products/meilane3/summary.html&imgUrl=https://fms.res" +
".meizu.com/dms/2018/03/21/37f4e79a-2ea4-4d27-97c4-0563e793ce48.jpg&name=魅蓝E3新品发布" +
    "&theme=blue&order=3");



