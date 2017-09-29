function setup() {
    // create a canvas to draw on
    createCanvas( 600, 800 );
}

function draw() {

    // background
    background( 'rgb(119, 255, 255)' );

    /* ***************************** */
    /* MAIN SANDBOX */
    /* ***************************** */
    push();

    // set the grid center( x:0, y:0 )
    // to canvas center
    translate( 300, 400 );


    /* ***************************** */
    /* ARMS */
    /* ***************************** */
    push();
    translate( 0, -55 );

    // left arm
    stroke( 'rgba(158, 0, 0, 1.0)' );
    strokeWeight( 50 );
    line( -140, 0, -200, -100 );
    line( -200, -100, -200, -200 );

    // hand
    stroke( 'rgb(133, 94, 0)' );
    strokeWeight( 75 );
    point( -200, -200 );

    // right arm
    rotate( PI );
    stroke( 'rgba(158, 0, 0, 1.0)' );
    strokeWeight( 50 );
    line( -140, 0, -200, -100 );
    line( -200, -100, -200, -200 );

    // hand
    stroke( 'rgb(133, 94, 0)' );
    strokeWeight( 75 );
    point( -200, -200 );

    pop(); // ARMS END


    /* ***************************** */
    /* BODY */
    /* ***************************** */
    push();
    // main shirt rectangle
    rect( -150, -100, 300, 300 );

    // red short stripes
    push();
    fill( 'rgba(255, 0, 0, 0.66)' );
    translate(-150, -100);
    rect(0, 0, 300, 40);
    translate(0, 80);
    rect(0, 0, 300, 40);
    translate(0, 80);
    rect(0, 0, 300, 40);
    translate(0, 80);
    rect(0, 0, 300, 40);
    pop();

    // green shirt stripes
    push();
    fill( 'rgba(16, 143, 0, 0.66)' );
    translate(-150, -100);
    rect(0, 0, 40, 300);
    translate(87, 0);
    rect(0, 0, 40, 300);
    translate(87, 0);
    rect(0, 0, 40, 300);
    translate(87, 0);
    rect(0, 0, 40, 300);
    pop();

    // button
    ellipse( 0, 0, 30 );

    pop(); // BODY END!


    /* ***************************** */
    /* LEGS */
    /* ***************************** */
    push();
    translate( 0, 200 );

    // left leg
    fill( 'rgb(133, 94, 0)' );
    triangle( -130, 0, 0, 0, -150, 500 );
    // right leg
    scale( -1, 1 );
    triangle( -130, 0, 0, 0, -150, 500 );
    pop(); // LEGS END


    /* ***************************** */
    /* HEAD */
    /* ***************************** */
    push();
    translate( 0, -175 );

    fill( 'rgb(205, 142, 218)' );
    ellipse( 0, 0, 330, 200 );

    // mouth
    fill( 0 );
    arc(
        0,
        50,
        250,
        60,
        radians(350),
        radians(190),
        PIE
    );

    // mustache
    push();
    noStroke();
    fill( 'rgb(119, 56, 25)' );
    quad( 0, 10, -10, 40, -150, 50, -110, 20 );
    scale( -1, 1 );
    quad( 0, 10, -10, 40, -150, 50, -110, 20 );
    pop();

    // nose
    triangle( 0, -20, 30, 20, -30, 20 );

    // eyes
    // left
    push();
    translate( -60, -40 );

    fill(255);
    ellipse( 0, 0, 60, 35 );
    noFill();
    fill( 'rgb(75, 185, 255)' );
    ellipse( 0, 0, 30 );
    fill( 0 );
    ellipse( 0, 0, 20 );

    fill( 'rgb(119, 56, 25)' );
    quad( 40, -40, 35, -30, -50, -10, -45, -30 );
    pop();

    // right
    push();
    translate( 60, -40 );

    fill(255);
    ellipse( 0, 0, 60, 35 );
    noFill();
    fill( 'rgb(75, 185, 255)' );
    ellipse( 0, 0, 30 );
    fill( 0 );
    ellipse( 0, 0, 20 );
    fill( 'rgb(119, 56, 25)' );
    quad( -40, -40, -35, -30, 50, -10, 45, -30 );
    pop();

    pop(); // HEAD END




    pop();
}
