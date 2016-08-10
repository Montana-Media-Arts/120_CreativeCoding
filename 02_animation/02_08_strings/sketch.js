// Example 2-8: strings

var quote = "hello icm!";

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(204);
  textSize(12);
  text(quote, 100, 100);
  textSize(20);
  text(quote, 100, 300)
}