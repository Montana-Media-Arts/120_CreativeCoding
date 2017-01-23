var input;
var button;


function setup() {
  createCanvas(600, 400);
  
  input = createInput();
  input.position(30, 30);
  button = createButton("submit");
  button.position(30, 60);
  button.mousePressed(update);
  
}


function handleData(data) {
  background(200, 150, 200);
  var days = data.list;
  for (var i=0; i<days.length; i++) {
    var humidity = 2*days[i].main.humidity;
    var wind = map(days[i].wind.speed, 0, 10, height, 0);
    fill(255, humidity);
    ellipse(i*40, wind, 30, 30);
  }
} 

function update() {
  var url = "http://api.openweathermap.org/data/2.5/forecast?appid=7bbbb47522848e8b9c26ba35c226c734&q=";
  var city = input.value();
  loadJSON(url+city, handleData);
}