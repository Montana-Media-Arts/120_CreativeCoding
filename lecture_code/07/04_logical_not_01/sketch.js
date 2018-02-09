function setup() {
    createCanvas( windowWidth, 300 );
    background('black');

    // adjust text display
    fill('white');
    textSize(36);
    textAlign(CENTER,CENTER);

    let textStr;

    // pass in "NOT" true
    if( !true ) {
        // this block DOES execute
        textStr = "The result was TRUE";
    } else {
        // THIS BLOCK DOES EXECUTE
        textStr = "The result was FALSE";
    }

    // display the results of the if statement
    text( textStr, width/2, height/2 );
}
