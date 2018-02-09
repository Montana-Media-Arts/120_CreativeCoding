function setup() {
    createCanvas( 400, 400 );
}

// declare the angle variable for the ellipse
let angle = 0;

function draw() {

    // set the frame rate for the sketch
    let target_fr = mouseX * 0.3 + 0.25;
    frameRate( target_fr );

    // set the background every frame
    background( 'rgb(47, 215, 252)' );

    // draw the ellipse
    push();
    translate( width*0.5, height*0.5 );
    rotate( radians(angle) );
    ellipse( 0, 0, 300, 50 );
    pop();

    // update angle position
    angle = angle + 45;

    // get and display the current frame rate
    let fr = frameRate();
    text( "frame rate: " + fr, 10, 20 );
}
