function setup() {
    createCanvas( windowWidth, 100 );
    // reduce the frame rate, so we can see the changes
    frameRate(2);
}

let exponent = 0;

function draw() {
    background( 'rgb(63, 186, 218)' );
    textSize(24);

    // calculate the result of 2 ** exp
    let operator_result = 2 ** exponent;
    let func_result = pow( 2, exponent );

    // display the equation and result
    text( "2 ** " + exponent + "         = " + operator_result, 20, 40 );
    text( "pow( 2, " + exponent + " ) = " + func_result, 20, 80 );

    // increment the exponent
    exponent = exponent + 1;
}
