function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    // reduce the frame rate, so we can see the changes
    frameRate(3);
}

// declare a variable, 'numerator'
// instantiate the variable to '0'
let numerator = 0;

function draw() {
    background( 'rgb(63, 186, 218)' );
    textSize(24);

    // calculate the result
    let result = numerator % 3;
    
    // display the equation and result
    text( numerator + " % 3 = " + result, 20, 80 );

    // increment the numerator
    numerator = numerator + 1;
}
