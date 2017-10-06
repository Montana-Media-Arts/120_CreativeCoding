function setup() {
    createCanvas( 400, 400 );
}

// declare the blue variable for the bg
var blue_val = 0;

function draw() {

    // set the background every frame
    background( 47, 215, blue_val );
    // update blue_val, by adding 1
    blue_val = blue_val + 1;
    // limit blue_val to 255 using modulo
    blue_val = blue_val % 255;

    // get and display the current frame count
    text( "frames elapsed: " + frameCount, 10, 20 );
}
