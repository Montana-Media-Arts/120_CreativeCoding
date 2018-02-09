function setup() {
    createCanvas( windowWidth, 400 );
}

let mouseIsPressed_SIZE = 10;
let mousePressFunction_SIZE = 10;

function draw() {
    background( 'rgb(92, 193, 159)' );

    // increment while mouse is pressed
    if( mouseIsPressed ) {
        mouseIsPressed_SIZE++;
    }

    fill(255);
    // mouseIsPressed based ellipse
    ellipse( width*1/4, height/2, mouseIsPressed_SIZE );
    // mousePressed() based ellipse
    ellipse( width*3/4, height/2, mousePressFunction_SIZE );

    // show some text sizes
    textAlign(CENTER);
    textSize(24);
    fill(0);
    text(mouseIsPressed_SIZE, width*1/4, 20);
    text(mousePressFunction_SIZE, width*3/4, 20);
}

// mouse pressed event function
// executes only once per mouse press
function mousePressed() {
    mousePressFunction_SIZE++;
    return false;
}
