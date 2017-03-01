
// Create ball object
var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.dx = 7;
ball.dy = 5;

function setup() {
  createCanvas(600, 400);
  background(255);
  // console.log(ball);
}

function draw() {


  // Move the ball
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Ensure the ball stays on the screen
  if (ball.x >= width || ball.x <= 0) {
    ball.dx *= -1;
  }
  if (ball.y >= height || ball.y <= 0) {
    ball.dy *= -1;
  }

  // draw our ball
  ellipse(ball.x, ball.y, ball.width, ball.width);
}
