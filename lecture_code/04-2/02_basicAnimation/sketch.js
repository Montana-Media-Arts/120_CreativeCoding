function setup() {
    createCanvas(600,700);
    background(200, 40, 6);


}


function draw() {

    // By moving background to the "draw()" function. We overwrite, the previous ellipse positions.
    background(200, 40, 6);


    // Using the environment variables, mouseX & mouseY
    ellipse(mouseX,mouseY,30,30);

}
