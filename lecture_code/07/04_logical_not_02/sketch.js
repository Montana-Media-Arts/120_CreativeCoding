function setup() {
    createCanvas( windowWidth, 300 );
    background('black');

    // adjust text display
    fill('white');
    textSize(36);
    textAlign(CENTER,CENTER);

    let textStr;

    textStr = "!false ⇒ " + !false;

    // display the results of the if statement
    text( textStr, width/2, height/2 );
}
