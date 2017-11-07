function setup(){
    createCanvas( windowWidth, 600 );
}

function draw() {
    // set the background to 'white'
    background(255);


    smileyFace( 40, 100, 1.0, 1.0 );
    smileyFace( 200, 100, 1.5, 1.0 );
    smileyFace( 200, 200, 0.5, 0.4 );
    smileyFace( 300, 250, 0.9, -3.0 );

}


/* SMILEY FACE FUNCTION */
function smileyFace( pos_x, pos_y, scale_x, scale_y ) {
    push(); // <- Begin sandbox

    // 1. scale and position smiley face
    translate( pos_x, pos_y );
    scale( scale_x, scale_y );

    // 2. draw smiley face
    stroke( 0 );
    fill('rgba(234, 255, 61, 1.0)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 255 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    pop(); // <- End sandbox
}
