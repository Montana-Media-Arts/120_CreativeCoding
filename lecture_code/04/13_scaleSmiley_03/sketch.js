function setup(){
    // create a canvas that is
    // (width:400px, height:600px)
    createCanvas(300,400);
}

function draw() {
    // set the background to 'white'
    background(255);

    // original, unchanged smiley face
    translate( 150, 75 );
    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 1.0)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 255 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // scale the x-axis by 250%
    // scale the y-axis by 150%
    // and flip around the y-axis
    translate( 0, 175 );
    scale(2.5, -1.5);
    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 1.0)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 255 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );
}
