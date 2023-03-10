//harsha Kshirasagar
function loadJson(callback) {
    var XmlHttpRequest = new XMLHttpRequest();
    XmlHttpRequest.overrideMimeType("application/json");
    XmlHttpRequest.open('GET', 'https://upadhayay.github.io/db.json', true);
    XmlHttpRequest.onreadystatechange = function () {
        if (XmlHttpRequest.readyState == 4 && XmlHttpRequest.status == "200") {
            // .open will NOT return a value 
            // but simply returns undefined in async mode so use a callback
            callback(XmlHttpRequest.responseText);
        }
    }
    XmlHttpRequest.send(null);
}

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "w3-right") {
        x.className += " responsive";
    } else {
        x.className = "w3-right";
    }
}

loadJson(function (response) {
    //document.write(response.toString())
    data = JSON.parse(response.toString());
    //document.write(data.books[0].id);
    parentElement = document.getElementById('mani');
    for (let i = 0; i < data.books.length; i++) {
        let obj = data.books[i];
        var divElement = document.createElement('div');
        divElement.classList.add("di");
        var img = document.createElement('img');
        img.classList.add("center2");
        img.src = 'images/coverpage.jpeg';
        divElement.appendChild(img);
        var titleElement = document.createElement('h3');
        titleElement.classList.add("book");
        titleAppendDivElement = divElement.appendChild(titleElement);
        titleAppendDivElement.innerHTML = obj.title;
        var a = document.createElement('a');
        a.classList.add("learnmore");
        a.setAttribute('href', 'https://einsteinpapers.press.princeton.edu/vol1-doc/');
        a.innerHTML = "see more";
        // apend the anchor to the body
        // of course you can append it almost to any other dom element
        divElement.appendChild(a);
        parentElement.appendChild(divElement);

    }
});
