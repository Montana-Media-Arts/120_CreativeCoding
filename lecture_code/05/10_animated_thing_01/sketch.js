


function setup() {
    createCanvas( windowWidth, windowHeight );
}

var headAngle = 0;
var headRotationRate = 0;
var armAngle = 0;
var headWidth = 80;
var headHeight = 40;

function draw() {
    // erase background
    background( 'rgb(56, 177, 255)' );

    // update values
    headRotationRate = (mouseY * 0.1) - 20;
    headAngle = headAngle + headRotationRate;
    armAngle = armAngle - 3;

    push();
    noCursor();
    translate( mouseX, mouseY );

    // arms
    push();
    // right arm
    strokeWeight( 10 );
    stroke( 0 );
    push();
    translate( 60, -40 );
    rotate( radians(armAngle) );
    line( 0, 0, 50, 0 );
    fill( 'rgb(255, 176, 59)' );
    noStroke();
    ellipse( 50, 0, 20 );
    pop();
    line( 10, -20, 60, -40 );

    // left arm
    push();
    translate( -10, -20 );
    rotate( radians( mouseX) );
    line( 0, 0, 150, 0);
    fill( 'rgb(255, 176, 59)' );
    noStroke();
    ellipse( 150, 0, 20 );
    pop();
    pop();


    // body
    ellipse( 0, 0, 40, 100 );

    // head
    push();
    noStroke();
    fill( 'rgb(255, 176, 59)' );
    translate( 0, -60 );
    rotate( radians(headAngle) );
    ellipse( 0, 0, headWidth, headHeight );
    stroke(0);
    fill(255);
    // eyes
    strokeWeight(2);
    push();
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
    // mouth
    push();
    fill( 0 );
    arc( 0, headHeight * 0.2, 60, 20, 0, PI );
    pop();
    pop();

    // legs
    fill( 255 );
    noStroke();
    triangle( -15, 35, 5, 35, -40, height+100 );
    triangle( 15, 35, -5, 35, 40, height+100 );


    pop();


}
