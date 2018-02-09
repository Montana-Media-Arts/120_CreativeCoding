// initialize bgColor and loopNum variables
let ball_color;
let fill_counter = 0;
let x_pos = 0;

function setup() {
    createCanvas( windowWidth, 300 );
    // initialize ball color
    ball_color = color(200, 200, 200, 5);
    background('white');
}

function draw() {
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
            random(255),
            5
        );
    } // no else needed

    // draw the ball
    noStroke();
    fill( ball_color );
    ellipse( x_pos, height/2, height );
}
