function setup() {
    createCanvas( 400, 400 );
}

// declare the blue variable for the bg
let blue_val = 0;

function draw() {

    // set the background every frame
    background( 0, 0, blue_val );
    // update blue_val, by adding 1
    blue_val = blue_val + 1;
    // limit blue_val to 255 using modulo
    blue_val = blue_val % 255;

    // get and display the current frame count
    fill( 255 );
    textSize( 24 );
    text( "frames elapsed: " + frameCount, 10, 30 );
}
