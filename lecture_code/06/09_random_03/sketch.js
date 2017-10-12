function setup() {
    createCanvas( windowWidth, windowHeight );
    frameRate( 4 );
    background( 0 );
}

function draw() {
    var circle_size = random( 10, width-10 );

    noFill();
    stroke( 255 );
    ellipse( width/2, height/2, circle_size );
}
