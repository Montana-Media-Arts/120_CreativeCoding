function setup() {
    createCanvas(500,350);
}

function draw() {

    fill('blue');
    rect( 20, 20, 480, 50 );
    ellipse( 250, 105, 400, 50 );

    fill('yellow');
    ellipse( 250, 160, 300, 50 );

    fill('orange');
    triangle( 20, 205, 250, 255, 480, 255 );
    rect( 60, 275, 120, 50 );
}
