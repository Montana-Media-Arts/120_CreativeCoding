function setup(){
    // create a canvas that is
    // (width:400px, height:600px)
    createCanvas(300,400);
}

function draw() {
    // set the background to 'white'
    background(255);


    /* WRONG ORDER */
    translate( 150, 75 );
    // ** draw the smiley face mouth **
    arc( 0, 15, 75, 50, 0, PI );

    // ** draw smily face eyes **
    // ** left eye **
    ellipse( -20, -15, 20 );
    // ** right eye **
    ellipse( 20, -15, 20 );

    // ** draw the smily face head **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.8)');
    ellipse( 0, 0, 100 );

    // add fill information for eyes and mouth
    noStroke();
    fill( 40, 255 );


    /* CORRECT ORDER */
    translate( 0, 150 );
    // ** draw the smily face head **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.8)');
    ellipse( 0, 0, 100 );

    // add fill information for eyes and mouth
    noStroke();
    fill( 40, 255 );

    // ** draw the smiley face mouth **
    arc( 0, 15, 75, 50, 0, PI );

    // ** draw smily face eyes **
    // ** left eye **
    ellipse( -20, -15, 20 );
    // ** right eye **
    ellipse( 20, -15, 20 );


}
