function setup() {
    // NUMBER 1 thing to do
    createCanvas(500,500);
    background(0,253,242);



    // The center of this ellipse is at 0, 0
    ellipse(0,0,300,120);

    // Translate moves the relative position of all shape functions below it.
    translate(250, 250);
    // SO even though the ellipse is at "0,0" this is in relationship to the translate position.
    ellipse(0,0,300,120);
    translate(0, -30);
    ellipse(-20,0,30,20);
    ellipse(20,0,30,20);

    // translates will accumulate with each other
    // translate(50, 50);
    // ellipse(0,0,30,20);


    // fill(0, 0, 198);
    // stroke(0);
    // strokeWeight(16);
    // ellipse(250,250,300,120);
    //
    // fill(0, 100, 0);
    // stroke(150);
    // strokeWeight(16);
    // ellipse(350,350,300,120);


}
