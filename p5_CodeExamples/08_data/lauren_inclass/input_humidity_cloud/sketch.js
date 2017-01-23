
var input;
var button;

function setup() {
  createCanvas(600, 400);
  
  input = createInput();
  input.position(30, 30);
  button = createButton("submit");
  button.position(30, 60);
  button.mousePressed(update);
  background(0, 150, 200);
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

function update() {
  var url = "http://api.openweathermap.org/data/2.5/weather?appid=7bbbb47522848e8b9c26ba35c226c734&q=";
  var city = input.value();
  loadJSON(url+city, handleData);
}