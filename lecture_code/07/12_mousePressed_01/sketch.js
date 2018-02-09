function setup() {
    createCanvas( windowWidth, 400 );
}

let mouseCounter = 0;

function draw() {
    background( 'rgb(171, 93, 193)' );

    textSize(24);
    textAlign(CENTER);
    fill(255);

    // print the number of times
    // the mouse has been pressed.
    let str = "Mouse clicked " + mouseCounter + " times.";
    text( str, width/2, height/2 );
}

// mouse pressed event function
function mousePressed() {
    mouseCounter++;
    return false;
}
