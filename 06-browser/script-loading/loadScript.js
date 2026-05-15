function loadScript(src, onLoad) {
    var  scriptTag = document.createElement("script");
    scriptTag.src = src;

    if(typeof onLoad === "function") {
        scriptTag.onload = onLoad;
        scriptTag.onreadystatechange = function() {
            if(4 === scriptTag.readState) {
                onLoad();
            }
        }
    }
    document.body.appendChild(scriptTag);
}