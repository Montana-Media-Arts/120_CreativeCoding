function setup() {
    createCanvas( 500, 200 );
}

function draw() {
    background( 'rgb(219, 111, 87)' );

    // translate to the "center" of the canvas
    // do this using width and height
    translate( width/2, height/2 );

    // draw a circle
    ellipse( 0, 0, 50 );
}
