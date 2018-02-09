function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    background( '0' );

    // divide by 0 examples
    let result;
    result = 1 / 0;
    // results in infinity
    console.log( result );

    result = 0 / 0;
    // results in NaN (Not a Number)
    console.log( result );
}
