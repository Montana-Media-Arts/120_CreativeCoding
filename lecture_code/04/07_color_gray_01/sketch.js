function setup() {
    // first we need to specify our canvas size
    createCanvas( 500, 390 );

    background( 'pink' );
}

function draw() {

    // specify no stroke for all shapes
    noStroke();

    // specify a fill value for each shape
    // these should move from black to white
    fill(0);
    rect(20, 20, 460, 50 );

    fill(51);
    rect(20, 80, 460, 50 );

    fill(102);
    rect(20, 140, 460, 50 );

    fill(153);
    rect(20, 200, 460, 50 );

    fill(204);
    rect(20, 260, 460, 50 );

    fill(255);
    rect(20, 320, 460, 50 );
}
