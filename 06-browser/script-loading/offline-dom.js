var offlienDOM = document.createDocumentFragment(),
    header = document.createElement("header"),
    nav = document.createElement("nav"),
    p = document.createElement("p");
    p.innerText = "This is Offline DOM";

    offlienDOM.appendChild(header);
    offlienDOM.appendChild(nav);
    offlienDOM.appendChild(p);

    document.body.appendChild(offlienDOM);