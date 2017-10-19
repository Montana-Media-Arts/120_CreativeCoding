function setup() {
    createCanvas( windowWidth, 300 );
    // set a low frame rate so that you can see the change
    // frameRate is set to 2 frames per second
    frameRate(2);

    // adjust text display
    textSize(36);
    textAlign(CENTER,CENTER);
}

// declare an initialize global variables
var boolState = false;
var fillColor;

function draw() {
    background('black');

    // switch bool variable state
    // use "logical not operator"
    boolState = !boolState;

    // set the fill color for an ellipse
    if( boolState ) {
        fillColor = 'red';
    } else {
        fillColor = 'blue';
    }

    // display text and ellipse
    // fill color dependent on boolState
    fill( fillColor );
    text( boolState, width/2, height/4 );
    ellipse( width/2, height/2, 80 );
}
