function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    // reduce the frame rate, so we can see the changes
    frameRate(2);
}

// declare a variable, 'value'
// instantiate the variable to '0'
let value = 0;

function draw() {
    background( 'rgb(63, 186, 218)' );
    textSize(24);

    // calculate the result of value + 1
    // modulo that result by 3, to keep it bound
    value = (value + 1) % 3;

    // display the equation and result
    text( "value = (value + 1) % 3;", 20, 40 );
    text( "value: " + value, 20, 80 );
}
