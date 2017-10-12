function setup() {
    createCanvas( windowWidth, windowHeight );
    background( '0' );

    // divide by 0 examples
    var result;
    result = 1 / 0;
    // results in infinity
    console.log( result );

    result = 0 / 0;
    // results in NaN (Not a Number)
    console.log( result );
}
