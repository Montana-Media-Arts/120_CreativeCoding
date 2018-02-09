// initial variable. Defines smiley face size.
let smileySize = 100;

// all other variables are determined in
// relation to the smileySize variable.
let eyePos_X = smileySize * 0.2;
let eyePos_Y = smileySize * -0.15;
let eyeSize = smileySize * 0.2;
let smilePos_Y = smileySize * 0.15;
let smileWidth = smileySize * 0.75;
let smileHeight = smileySize * 0.50;


function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    background( 'rgb(61, 175, 120)' );
}


function draw() {

    // ** draw the smily face **

    // make the smiley face follow the mouse
    translate( mouseX, mouseY );

    // draw the outline and head
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    // note: the head size is based on a variable
    ellipse( 0, 0, smileySize );
    
    // draw the mouth and eyes
    // note: that their size and position is dependent on the initial smileySize let.
    noStroke();
    fill( 40, 127 );
    arc( 0, smilePos_Y, smileWidth, smileHeight, 0, PI );
    ellipse( -eyePos_X, eyePos_Y, eyeSize );
    ellipse( eyePos_X, eyePos_Y, eyeSize );
}
