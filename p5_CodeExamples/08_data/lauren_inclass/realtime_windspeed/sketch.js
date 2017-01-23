var url = 'http://api.openweathermap.org/data/2.5/weather?APPID=7bbbb47522848e8b9c26ba35c226c734&q=';

var input;
var button;

var x = 0;
var speed = 0;

function setup() {
  createCanvas(600, 400);
  input = createInput();
  button = createButton('submit');
  button.mousePressed(submit);
}

function draw() {
  background(255, 100, 0);
  ellipse(x, height/2, 30, 30);
  x += speed;
  if (x > width) {
    x = 0;
  }
}

function submit() {
  var location = input.value();
  loadJSON(url+location, handleWeather);
}

function handleWeather(data) {
  speed = data.wind.speed;
}