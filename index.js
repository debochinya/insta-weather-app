
let request = require('request');

let apiKey = 'e7b05c3b9eb830ce3696c5eeaa8cea57';
let city = 'London,uk';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
