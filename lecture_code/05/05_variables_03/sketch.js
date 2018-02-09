/** EXPLORING VARIABLES
*
* 	Sketch from p5-Examples-Variables
* 	https://p5js.org/examples/data-variables.html
*
* 	TODO: Change the values in lines 13, 14, & 15
*/

// variables defining lines
// change these values
// (keep them as Numbers)
// notice the changes
let a = 50;
let b = 120;
let c = 180;

function setup() {
  createCanvas(720, 400);
  background(0);
  stroke(153);
  strokeWeight(4);
  strokeCap(SQUARE);
}

function draw() {
  line(a, b, a+c, b);
  line(a, b+10, a+c, b+10);
  line(a, b+20, a+c, b+20);
  line(a, b+30, a+c, b+30);

  a = a + c;
  b = height-b;
}
