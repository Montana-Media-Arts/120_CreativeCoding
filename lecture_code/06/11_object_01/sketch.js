// define a smiley variable.
// instantiate the variable as an object
let smiley = {};

// we can then assign qualities to the object
smiley.size = 150;
smiley.eye_mouth_y = -25;
smiley.color = 'yellow';
smiley.mouth_h = 90;
smiley.pos_x = 0;
smiley.pos_y = 0;

function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    background( '0' );

    smiley.pos_x = width/2;
    smiley.pos_y = height/2;
}


function draw() {

    // draw the smiley
    translate( smiley.pos_x, smiley.pos_y );

    fill( smiley.color );
    ellipse( 0, 0, smiley.size );

    fill('black');
    ellipse( smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.25 );
    ellipse( -smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.25 );

    arc( 0, -smiley.eye_mouth_y, smiley.size * 0.8, smiley.mouth_h, 0, PI );

    // update pos
    smiley.pos_x += random( -2, 2 );
    smiley.pos_y += random( -2, 2 );
}
