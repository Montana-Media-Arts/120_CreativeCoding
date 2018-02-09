function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    frameRate( 4 );
    background( 0 );
}

function draw() {
    noFill();
    stroke( 255 );

    let circle_size = random( 10, width-10 );
    ellipse( width/2, height/2, circle_size );
}
