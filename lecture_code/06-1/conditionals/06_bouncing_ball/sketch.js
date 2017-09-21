
var ball_width = 40;
var ball_x = 10;
var ball_y = 10;
var delta_x = 1;
var delta_y = 1;

function setup() {
  createCanvas(600, 400);
  background(255);
}

function draw() {


  // Move the ball and Keep the ball on the screen.
  ball_x += delta_x;
  ball_y += delta_y;
  if (ball_x == width) {
    delta_x = -1 * delta_x;
  }

  if (ball_y == height) {
    ball_y = 0;
  }


  // draw our ball
  ellipse(ball_x, ball_y, ball_width, ball_width);
}
