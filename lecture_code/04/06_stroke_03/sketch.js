function setup() {
    createCanvas( 500, 260 );
}

function draw() {

    // shape with fill and border
    fill('purple');
    stroke('black');
    strokeWeight(8);
    rect( 20, 20, 300, 100 );

    // shape with no fill
    noFill();
    stroke('black');
    strokeWeight(8);
    rect( 150, 70, 300, 150 );

    // shape with no border
    fill('red');
    noStroke();
    ellipse( 180, 200, 300, 100 );

}
