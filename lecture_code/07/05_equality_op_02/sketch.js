// initialize bgColor and loopNum variables
var ball_color;
var fill_counter = 0;
var x_pos = 0;

function setup() {
    createCanvas( windowWidth, 300 );
    // initialize ball color
    ball_color = color(0, 0, 0);
}

function draw() {
    background( 'rgb(41, 139, 88)' );

    // increment x position value
    x_pos++;
    // bound the value within the canvas width
    x_pos %= width;

    // calculate fill counter value
    fill_counter = x_pos % 30;

    // check if fill counter equals 0
    if( fill_counter == 0 ) {
        ball_color = color(
            random(255),
            random(255),
            random(255)
        );
    } // no else needed

    // draw the ball
    fill( ball_color );
    ellipse( x_pos, height/2, height*0.8 );
}
