
// declare environment variables
var pt1_x, pt1_y;
var pt2_x, pt2_y;
var pt3_x;
var pt3_y;

var col_r = 0;
var col_g = 10;
var col_b = 0;

function setup() {
  createCanvas(800,800);
  background(0);

  pt1_x = 0 - width;
  pt1_y = height;

  pt2_x = width;
  pt2_y = 0 - height;

  pt3_x = width;
  pt3_y = height;

  frameRate(5);

}




function draw() {

  pt1_x += random(0, 50);
  pt2_y += random(0, 50);

  col_g += random(0, 10);
  col_b += random(0, 10);

  // brute force protection for going over 255
  col_g = col_g % 255;
  col_b = col_b % 255;

  fill(col_r, col_g, 255 - col_b);
  triangle(pt1_x, pt1_y, pt2_x, pt2_y, pt3_x, pt3_y);

}
