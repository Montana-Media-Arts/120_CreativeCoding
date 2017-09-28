function setup() {
    // NUMBER 1 thing to do
    createCanvas(500,500);
    background(0,253,242);


    push();

    // main ellipse
    // AKA. the head
    translate(250, 100);
    fill(0, 255, 0);
    ellipse(0,0,300,120);

    // The eyes
    push();
    translate(0, -30);
    fill(0);
    ellipse(-50,0,30,20);
    ellipse(50,0,30,20);
    pop();

    // The mouth
    push();
    line(-75, 30, 75, 20);
    pop();

    // The Nose
    push();
    fill(30, 200, 10);
    triangle(0,-30,0,10,50,40);
    pop();


    pop();


    text("hahahahahaha", 10, 20);


}
