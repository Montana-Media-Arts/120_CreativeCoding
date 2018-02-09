function setup() {
    createCanvas( windowWidth, 100 );
    // reduce the frame rate, so we can see the changes
    frameRate(2);
}

let inc_val = 0;
let dec_val = 100;

function draw() {
    background( 'rgb(237, 158, 158)' );
    textSize(24);

    // increment the value
    inc_val++;
    dec_val--;

    // display the result
    text( "inc_val: " + inc_val, 20, 40 );
    text( "dec_val: " + dec_val, 20, 80 );
}
