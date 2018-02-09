let circle_min = 10;
let circle_max;

function setup() {
    createCanvas( windowWidth, 600 );

    // find the max circle size
    // in relation to the width of the canvas
    circle_max = width - 20;
}

function draw() {
    background( 'rgb(43, 255, 96)' );

    // map mouseX to the size of a circle
    let circle_size = map( mouseX, 0, width, circle_min, circle_max );

    // draw a circle, based on mouseX
    fill(255);
    ellipse( width/2, height/2, circle_size );
}
