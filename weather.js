var key = "e7b05c3b9eb830ce3696c5eeaa8cea57";
var city = "London"; // My test case was "London"
var url = "https://api.openweathermap.org/data/2.5/forecast";

$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: city,
    appid: key,
    units: "metric",
    cnt: "5"
  },
  success: function(data) {
    console.log('Received data:', data) // For testing
	 var wf = "";
	document.getElementById("city").innerHTML=data.city.name;
	document.getElementById("position").innerHTML="Latitude: " + data.city.coord.lat + "<br>Longitude: "+data.city.coord.lon;
    $.each(data.list, function(index, val) {
      wf += "<p>" // Opening paragraph tag
      wf += "<b>Day " + index + "</b>: " // Day
      wf += "Max "+ val.main.temp_max + "&degC" //  Max Temperature
	  wf += "Min "+ val.main.temp_min + "&degC" //  Max Temperature
      wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      wf += "</p>" // Closing paragraph tag
    });
    $("#weather-widget").html(wf);
    
  }
});