function setup() {
    // first we need to specify our canvas size
    createCanvas( 500, 550 );

    background( 0 );
}

function draw() {

    // specify no stroke for all shapes
    noStroke();

    // specify a fill value for each shape
    // these should move from black to white
    // NO ALPHA VALUE
    fill(51);
    rect(20, 20, 250, 200 );

    // grayscale value w/ alpha value specified
    fill(102, 150);
    rect(80, 90, 250, 200 );

    // rgb value w/ alpha value
    fill( 240, 10, 20, 150 );
    rect(120, 160, 250, 200 );

    // 'rgba()' value, where alpha is a ratio
    fill( 'rgba(176, 255, 29, 0.5)' );
    rect(160, 230, 250, 200 );

    fill( 'rgba(29, 255, 248, 0.2)' );
    rect(200, 300, 250, 200 );
}
