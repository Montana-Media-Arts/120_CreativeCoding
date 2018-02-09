// initialize bgColor and loopNum variables
let bgColor = 'red';
let loopNum = 0;

function setup() {
    createCanvas( windowWidth, 300 );
    // set a low frame rate so that you can see the change
    // frameRate is set to 1 frames per second
    frameRate(1);

    // adjust text display
    textSize(36);
    textAlign(CENTER,CENTER);
}

function draw() {
    // set the fill color for an ellipse
    if( loopNum == 4 ) {
        bgColor = 'purple';
    } // no need for an else function block

    // set and replace background
    background( bgColor );

    // display the current loopNum
    text( "loopNum = " + loopNum, width/2, height/2 );

    // increment the loopNum variable
    loopNum++;
}
