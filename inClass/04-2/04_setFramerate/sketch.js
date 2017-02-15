function setup() {
    createCanvas(600,700);
    background(200, 40, 6);

    frameRate(2);
}


var ellipseSize = 600;


function draw() {

    // Lets refresh the background every 5 frames.
    // 1. we grab the framecount
    // 2. check if it is divisible by 5
    // 3. if som update background
    if ( frameCount % 5 === 0 ) {
        background( random(0, 266), random(0, 266), random(0, 266) );
    }


    ellipse(width/2,height/2,ellipseSize,ellipseSize);

    // Adjust the size of the ellipse
    ellipseSize = ellipseSize * 0.8;

    // Get the current frame rate of the sketch
    var currFrameRate;
    currFrameRate = frameRate();
    // display the current frame rate in the console
    console.log(currFrameRate);
    console.log(frameCount);

}
