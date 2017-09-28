function setup() {
    createCanvas(500,350);
}

function draw() {

    noFill();

    stroke('red');
    rect( 20, 20, 300, 100 );

    stroke('green');
    triangle( 20, 330, 250, 20, 480, 330 );

    stroke('pink');
    fill('yellow');
    ellipse( 250, 250, 280, 130 );
}
