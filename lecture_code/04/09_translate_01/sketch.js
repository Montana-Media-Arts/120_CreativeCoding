function setup(){
    createCanvas(400,400);
    background(255);
}

function draw() {

    translate( 150, 100 );

    noStroke();
    fill( 'rgba(89, 255, 91, 0.5)' );
    ellipse( 0, 0, 50 );

    fill( 'rgba(89, 210, 255, 0.5)' );
    rect( 50, 50, 100, 100 );
}
