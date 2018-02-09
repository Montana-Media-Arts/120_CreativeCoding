let ball_x;
let ball_y;
let ball_width = 80;

let max_ball_mvt = 2;

function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    background(255);

    ball_x = width * 0.5;
    ball_y = height * 0.5;
}

function draw() {

    // draw the ball
    fill( 'rgba(37, 141, 159, 0.1)' );
    ellipse(ball_x, ball_y, ball_width, ball_width);

    // we want to randomly update the position of the ball
    ball_x += random(-max_ball_mvt, max_ball_mvt);
    ball_y += random(-max_ball_mvt, max_ball_mvt);
}
