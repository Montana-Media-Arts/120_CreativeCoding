// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-14: "Pointillism"

// Number of columns and rows in our system
var cols, rows;


var slider;

function setup() {
  createCanvas(640, 480);

  slider = createSlider(4, 64, 16);

  video = createCapture(VIDEO);
  video.size(width, height);

  //video.hide();

  background(0);
}

function draw() {
  
  video.loadPixels();

  // Draw ten dots per frame
  for (var i = 0; i < 10; i++) {

    // Pick a random point
    var x = floor(random(video.width));
    var y = floor(random(video.height));

    // Grab a color from a pixel
    var col = video.get(x, y);
    
    // Back to shapes! Instead of setting a pixel, we use the color 
    // from a pixel to draw a circle.
    noStroke();
    fill(col[0], col[1], col[2], 127);
    ellipse(x, y, slider.value(), slider.value()); 
    
  }
}