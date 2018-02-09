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
let boolState = false;
let fillColor;

function draw() {
    background('black');

    // set the fill color for an ellipse
    if( boolState ) {
        // switch bool variable state
        boolState = false;
        // set fill color
        fillColor = 'red';
    } else {
        // switch bool variable state
        boolState = true;
        // set fill color
        fillColor = 'blue';
    }

    // display text and ellipse
    // fill color dependent on boolState
    fill( fillColor );
    text( boolState, width/2, height/4 );
    ellipse( width/2, height/2, 80 );
}
