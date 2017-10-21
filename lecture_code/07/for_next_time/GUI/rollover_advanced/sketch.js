// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 5-6: Rewrite Example 5-3 so that the squares fade from white to black 
// when the mouse leaves their area. 
// Hint: you need four variables, one for each rectangle's color.

// Four variables, one for each square's brightness level
var bright0 = 0;
var bright1 = 0;
var bright2 = 0;
var bright3 = 0;

function setup() { 
  createCanvas(640,360); 
} 

function draw() { 
  // Draw the background
  background(0); 

  // Depending on the mouse location, a 
  // different rectangle is set to brightness 255
  if (mouseX < 320 && mouseY < 180) { 
    bright0 = 255;
  } 
  else if (mouseX > 320 && mouseY < 180) { 
    bright1 = 255;
  } 
  else if (mouseX < 320 && mouseY > 180) { 
    bright2 = 255;
  } 
  else if (mouseX > 320 && mouseY > 180) { 
    bright3 = 255;
  } 

  // All rectangles always fade
  bright0 = bright0 - 2;
  bright1 = bright1 - 2;
  bright2 = bright2 - 2;
  bright3 = bright3 - 2;

  // Fill color and draw each rectangle
  noStroke(); 
  fill(bright0);
  rect(0,0,320,180); 
  fill(bright1);
  rect(320,0,320,180); 
  fill(bright2);
  rect(0,180,320,180); 
  fill(bright3);
  rect(320,180,320,180); 
  
  // Draw grid lines
  stroke(255); 
  line(320,0,320,360); 
  line(0,180,640,180); 

} 
