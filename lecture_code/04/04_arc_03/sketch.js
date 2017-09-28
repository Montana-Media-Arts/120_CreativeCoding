function setup() {
    createCanvas( 600, 400 );
    background( '#e9b8b8' );
}

function draw() {
    arc( 150, 200, 180, 180, HALF_PI, 0, PIE );
    arc( 450, 200, 180, 180, HALF_PI, 0, CHORD );
}
