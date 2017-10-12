function setup() {
    createCanvas( windowWidth, 100 );
    // reduce the frame rate, so we can see the changes
    frameRate(2);
}

var exponent = 0;

function draw() {
    background( 'rgb(63, 186, 218)' );
    textSize(24);

    // calculate the result of 2 ** exp
    var result = 2 ** exponent;

    // display the equation and result
    text( "2 ** " + exponent + " = " + result, 20, 40 );

    // increment the exponent
    exponent = exponent + 1;
}
