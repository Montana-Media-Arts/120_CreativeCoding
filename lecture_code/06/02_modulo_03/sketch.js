function setup() {
    createCanvas( windowWidth, 200 );
}

// declare a variable, 'pos_x'
// instantiate the variable to '20'
// This will represent the position of an ellipse
let pos_x = 20;

function draw() {
    background( 'rgb(218, 63, 161)' );

    // draw an ellipse
    fill(255);
    noStroke();
    ellipse( pos_x, 140, 30 );

    // update the ellipses position
    pos_x = pos_x + 5;
    // bound it to the width of the canvas
    pos_x = pos_x % width;

    // display the equation and result
    textSize(24)
    text( "width: " + width, 20, 40 );
    text( "pos_x: " + pos_x, 20, 80 );
}
