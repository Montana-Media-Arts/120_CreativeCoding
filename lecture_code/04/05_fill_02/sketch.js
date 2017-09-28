function setup() {
    createCanvas(500,350);
}

function draw() {

    fill('purple');
    rect( 20, 20, 300, 100 );

    noFill();
    rect( 150, 70, 300, 150 );

    fill('yellow');
    ellipse( 250, 270, 300, 150 );

    noFill();
    triangle( 20, 330, 250, 20, 480, 330 );
}
