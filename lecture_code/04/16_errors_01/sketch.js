function setup() {
    // the following function will "throw" an error
    // This is because there is no function called
    // -> createcanvas()
    //
    // It is technically misspelled
    // And needs the 'C' starting the word "canvas"
    // to be capitalized.
    createcanvas( 400, 400 );
    background( 'blue' );
}
