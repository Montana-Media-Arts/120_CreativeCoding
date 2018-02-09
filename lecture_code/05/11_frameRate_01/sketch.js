function setup() {
    createCanvas( 400, 400 );
}


let angle = 0;

function draw() {
    background( 'rgb(47, 252, 68)' );

    translate( width*0.5, height*0.5 );
    rotate( radians(angle) );
    ellipse( 0, 0, 300, 50 );

    // update angle position
    angle = angle + 45;
}
