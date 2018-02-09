function setup() {
    createCanvas( 400, 400 );

    // set the frame rate for the sketch
    frameRate( 2 );
}


let angle = 0;

function draw() {
    background( 'rgb(252, 232, 47)' );

    translate( width*0.5, height*0.5 );
    rotate( radians(angle) );
    ellipse( 0, 0, 300, 50 );

    // update angle position
    angle = angle + 45;
}
