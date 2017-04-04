function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

xmlhttp = new XMLHttpRequest();
var url = "https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=UJDVUSN67OqvagQklC9DoQ&client_secret=gqHGqsQI5Y7HHb3ZFD7DT8MqXHIvfDieMuV3qH0qFReodOyPT0sxbkHvlKZdYGmt";
xmlhttp.open("POST", url, true);
xmlhttp.setRequestHeader("Content-type", "application/json");
xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	console.log(xmlhttp.responseText);
        alert(xmlhttp.responseText);
    }
}
var parameters = {
    "grant-type": "client_credentials",
    "client_id": "UJDVUSN67OqvagQklC9DoQ",
     "client_secret": "gqHGqsQI5Y7HHb3ZFD7DT8MqXHIvfDieMuV3qH0qFReodOyPT0sxbkHvlKZdYGmt"
};
// Neither was accepted when I set with parameters="username=myname"+"&password=mypass" as the server may not accept that

function doFunction() {
  xmlhttp.send(JSON.stringify(parameters));
}

doFunction()
