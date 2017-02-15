function setup() {
    createCanvas(600,700);
    background(200, 40, 6);

}


var ellipseSize = 600;


function draw() {
    // Set the background eveyr frame
    background(200);


    ellipse(width/2,height/2,ellipseSize,ellipseSize);




    // Get the current frame rate of the sketch
    var currFrameRate;
    currFrameRate = frameRate();
    // display the current frame rate in the sketch
    text(currFrameRate, 100, 100);

}
