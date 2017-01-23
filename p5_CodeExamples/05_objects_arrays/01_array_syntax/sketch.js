// This is declaring an array: a list of 6 values
var numberlist = [23, 34, 53, -21, 40, 5];

// This is just a single number
var num = 5;

function setup() {
  createCanvas(400, 300);

}

function draw() {
  background(0);
  fill(255);
  // This is accessing an individual element of the array
  // by its index (indices start at 0)
  ellipse(100, 100, numberlist[2], numberlist[2]);

  // This is just using an old fashioned variable
  ellipse(200, 100, num, num);

}