/**
 * Creepy Spinning Variable Person
 *
 */

function setup() {
    createCanvas( windowWidth, 800 );
    // createCanvas( windowWidth, windowHeight );
}

let headAngle = 0;
let headRotationRate = 0;
let armAngle = 0;
let headWidth = 80;
let headHeight = 40;

function draw() {
    // erase every frame
    background( 'rgb(56, 177, 255)' );
    // turn the cursor off
    noCursor();

    // UPDATE VALUES
    // base head rotation rate on mouseY pos
    headRotationRate = (mouseY * 0.1) - 20;
    // update head angle,
    // to equal itself plus headRotationRate
    headAngle = headAngle + headRotationRate;
    // set the arm to spin at a constant rate
    armAngle = armAngle - 3;


    // *****************************
    // PERSON SANDBOX
    // *****************************
    push();

    // make the person follow the mouse.
    translate( mouseX, mouseY );

    // ARMS
    push();
    // right arm
    strokeWeight( 10 );
    stroke( 0 );
    // draw the spinning forarm
    push();
    // move the position of the arm
    // to facilitate rotation
    translate( 60, -40 );
    // rotate the arm
    rotate( radians(armAngle) );
    // draw the arm
    line( 0, 0, 50, 0 );
    // define and draw a hand-thing
    fill( 'rgb(255, 176, 59)' );
    noStroke();
    ellipse( 50, 0, 20 );
    pop();
    // draw the static upper arm
    line( 10, -20, 60, -40 );

    // left arm
    push();
    // move the center to facilitate rotate
    translate( -10, -20 );
    // rotate, based on mouseX position
    rotate( radians( mouseX) );
    // draw arm and hand
    line( 0, 0, 150, 0);
    fill( 'rgb(255, 176, 59)' );
    noStroke();
    ellipse( 150, 0, 20 );
    pop();
    pop();


    // BODY
    // boring body shape
    ellipse( 0, 0, 40, 100 );

    // HEAD
    push();
    noStroke();
    fill( 'rgb(255, 176, 59)' );
    // move center
    translate( 0, -60 );
    // rotate head based on headAngle
    rotate( radians(headAngle) );
    // draw head skull
    ellipse( 0, 0, headWidth, headHeight );
    stroke(0);
    fill(255);
    // eyes
    strokeWeight(2);
    push();
    // draw eyes based on head size
    translate( headWidth * -0.2, headHeight * -0.2 );
    ellipse( 0, 0, headWidth * 0.33, headHeight * 0.33 );
    noStroke();
    fill( 'rgb(255, 31, 111)' );
    ellipse( 0, 0, 10 );
    fill( 0 );
    ellipse( 0, 0, 5 );
    pop();
    push();
    translate( headWidth * 0.2, headHeight * -0.2 );
    ellipse( 0, 0, 20 );
    noStroke();
    fill( 'rgb(255, 31, 111)' );
    ellipse( 0, 0, 10 );
    fill( 0 );
    ellipse( 0, 0, 5 );
    pop();

    // MOUTH
    push();
    fill( 0 );
    arc( 0, headHeight * 0.2, 60, 20, 0, PI );
    pop();
    pop(); // <- END HEAD

    // LEGS
    fill( 255 );
    noStroke();
    // keep legs out off bottom of window
    triangle( -15, 35, 5, 35, -40, height+100 );
    triangle( 15, 35, -5, 35, 40, height+100 );

    pop(); // <- END PERSON

}
