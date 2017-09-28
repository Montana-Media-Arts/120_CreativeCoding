function setup() {
    createCanvas( 500, 260 );
}

function draw() {

    stroke('black');
    strokeWeight(1);
    line( 20, 20, 480, 20 );

    strokeWeight(4);
    line( 20, 40, 480, 40 );

    strokeWeight(10);
    line( 20, 70, 480, 70 );

    strokeWeight(20);
    line( 20, 100, 480, 100 );

    stroke('pink');
    strokeWeight( 6 );
    point( 20, 130 );

    stroke('magenta');
    strokeWeight( 15 );
    point( 50, 150 );

    stroke('red');
    strokeWeight( 30 );
    point( 95, 180 );

    stroke('orange');
    strokeWeight( 60 );
    point( 185, 220 );

}
