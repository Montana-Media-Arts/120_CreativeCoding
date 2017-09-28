function setup(){
    createCanvas(400,400);
}

function draw() {
    background('rgb(255, 161, 142)');

    // move center grid point (x:0, y:0)
    // to the center of the canvas
    translate( 200, 200 );

    // rotate the grid by 15°
    rotate( radians(15) );

    // draw a rectangle at (x:50, y:50)
    // in relation to the grid transformations
    fill( 'rgba(5, 64, 214, 0.8)' );
    rect( 0, 0, 50, 50 );
}
