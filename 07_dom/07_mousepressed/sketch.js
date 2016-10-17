// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

// Using p5 DOM element mouse listeners, mousePressed.

// Global variable for background color
var bg;

function setup() {
  createCanvas(400, 400);
  bg = color(51);

  var link = createA("#", "Click me");
  // The function changeBG becomes a callback for when the mouse is pressed
  // On this DOM element (different than mousePressed() anywhere on page)
  link.mousePressed(changeBG);

}

function draw() {
  background(bg);
}

// This function is triggered when the mouse is pressed on the link
function changeBG() {
  bg = color(random(255));
}
