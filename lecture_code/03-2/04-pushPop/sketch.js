function setup() {
    // NUMBER 1 thing to do
    createCanvas(500,500);
    background(0,253,242);

    // push and pop create a "sandbox"
    // In this sandbox, all "manipulator" functions, only apply to associated functions WITHIN the sandbox.
    push();
    // Example with push pop

    // main ellipse
    translate(250, 100);
    fill(0, 255, 0);
    ellipse(0,0,300,120);

    translate(0, -30);
    fill(0);
    ellipse(-50,0,30,20);
    ellipse(50,0,30,20);

    pop();


    // Example without push/pop
    // Even though we have "filled" other shapes. These fills do not apply, because they occured, in the "sandbox"
    translate(250, 250);
    ellipse(0,0,300,120);

    translate(0, 30);
    ellipse(-20,0,30,20);
    ellipse(20,0,30,20);


}
