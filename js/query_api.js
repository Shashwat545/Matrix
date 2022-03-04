var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "msqh6kABlgf8lmsfxzy9XhMteQ2W6jdHeTqK3OY7";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("year").textContent = response.date.substring(0,4);
    document.getElementById("month").textContent = response.date.substring(5,7);
    document.getElementById("day").textContent = response.date.substring(8,10);
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})