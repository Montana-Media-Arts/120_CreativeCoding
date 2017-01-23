
function setup() {
  createCanvas(600, 400);
  var url = "http://api.openweathermap.org/data/2.5/weather?appid=7bbbb47522848e8b9c26ba35c226c734&q=tucson";
  loadJSON(url, handleData);
}

function handleData(data) {
  background(0, 150, 200);
  var clouds = data.clouds.all;
  var humidity = data.main.humidity;
  fill(255, humidity);
  for (var i=0; i<clouds; i++) {
    ellipse(random(width), random(height), 30, 30);
  }
}