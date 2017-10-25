// Here is an array of "strings"
var languages = ["c++", "java", "javascript", "python"];


function setup() {
  createCanvas(400, 300);
  background(0);
  textSize(64);
  text("Click the mouse", 50, 50);
}

function mousePressed() {
  background(0);
  // Here's how you can pick a random index for an array
  var index = floor(random(0, languages.length));
  fill(255);
  textSize(64);
  // Drawing random text each time the mouse is pressed
  text(languages[index], 50, 50);
}

function draw() {

}