// create a ball object to store values in
var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}


// MOVE THE BALL AND KEEP THE BALL ON THE SCREEN.
function draw() {
    // update the ball X and Y position
    // a "delta" or change per frame value
    // is added to the X and Y position
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    // if the ball is beyond the canvas edge,
    // change direction
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    // draw the ball
    ellipse(ball.x, ball.y, ball.width, ball.width);

}

function mousePressed() {
    // update delta_values based on mouse position
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
