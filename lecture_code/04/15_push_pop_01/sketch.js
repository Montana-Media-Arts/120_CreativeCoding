function setup() {
    createCanvas( 400, 400 );
}

function draw() {

    /** CREATE SANDBOX **/
    // using push() and pop()
    // transformation functions only apply in here
    push();

    // set the color of shapes
    fill( 'rgb(248, 120, 255)' );
    // remove stroke
    noStroke();

    // translate the center point of the grid
    // this sets (x:0, y:0) to the center of the canvas
    translate( 200, 200 );
    // rotate by 15°
    rotate( radians(15) );

    // draw a rectangle
    rect( 0, 0, 50, 80 );

    /* END SANDBOX */
    pop();


    /** OUTSIDE SANDBOX **/
    // draw a rectangle, with default settings
    // notice: the rect code is the same as in the sandbox
    // BUT, the results are different
    rect( 0, 0, 50, 80 );
}
