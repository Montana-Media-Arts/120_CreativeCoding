// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

// Example 2-9: images

var img;

function preload() {
  img = loadImage("lunar.jpg");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  image(img, 0, 0);
}