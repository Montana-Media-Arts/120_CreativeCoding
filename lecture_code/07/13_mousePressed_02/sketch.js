function setup() {
    createCanvas( windowWidth, 400 );
}

var mouseIsPressed_SIZE = 10;
var mousePressFunction_SIZE = 10;

function draw() {
    background( 'rgb(171, 93, 193)' );

    // increment while mouse is pressed
    if( mouseIsPressed ) {
        mouseIsPressed_SIZE++;
    }

    fill(255);
    // mouseIsPressed based ellipse
    ellipse( width*1/4, height/2, mouseIsPressed_SIZE );
    // mousePressed() based ellipse
    ellipse( width*3/4, height/2, mousePressFunction_SIZE );

}

// mouse pressed event function
// executes only once per mouse press
function mousePressed() {
    mousePressFunction_SIZE++;
    return false;
}
