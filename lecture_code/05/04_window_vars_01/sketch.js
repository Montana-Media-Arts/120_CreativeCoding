function setup() {
    // get p5 to query the size of the browser window
    // then create a canvas the same size.
    createCanvas( windowWidth, windowHeight );
}

function draw() {
    background( 'rgb(219, 206, 87)' );

    // translate to the "center" of the canvas
    // do this using width and height
    translate( width/2, height/2 );

    // draw a circle
    ellipse( 0, 0, 50 );
}
