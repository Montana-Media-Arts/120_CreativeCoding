function setup(){
    // create a canvas that is
    // (width:400px, height:400px)
    createCanvas(400,400);
}

function draw() {
    // set the background to 'white'
    background(255);

    // translate the grid to the
    // "center" of the canvas
    translate( 200, 200 );


    // ** draw the smily face head **
    // This ellipse is centered at (x:0, y:0)
    // This is the "new" center of the canvas
    // this is possible due to translate()
    stroke( 0 );
    fill('rgba(234, 255, 61, 1.0)');
    ellipse( 0, 0, 400 );

    // ** draw the smiley face mouth **
    // This is centered on the 0-point,
    // of the x-axis
    noStroke();
    fill( 40 );
    arc( 0, 50, 300, 200, 0, PI );

    // ** draw smily face eyes **
    // (notice the use of negative numbers
    // to go "above" 0, and to draw
    // the left eye)
    //
    // In other words they have the
    // same y-value (-15px)
    // And the x-value is mirrored
    // (left:-20px right:20px)
    fill( 40 );
    // ** left eye **
    ellipse( -100, -75, 100 );
    // ** right eye **
    ellipse( 100, -75, 100 );
}
