// DEFINE GLOBAL VARIABLES
let bgColor; // background-color
let centerX, centerY;
let smoke = {};
smoke.pos1x = 100;
smoke.pos1y = 100;
smoke.pos2x = 200;
smoke.pos2y = 200;
smoke.pos3x = 0;
smoke.pos3y = 0;
let multMax = 0.01;
let multDelta;
let mult;
let redFill = 255;
let alphaAmt = 40;
let alphaNoise;


function setup() {
    bgColor = color(50, 100, 200);
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);
    background(bgColor);
    // frameRate(20);

    // Set initial position
    smoke.pos1x = random(width);
    smoke.pos1y = random(height);
    smoke.pos2x = smoke.pos1x + 2;
    smoke.pos2y = smoke.pos1y - 2;
}


function draw() {

    centerX = width * 0.5;
    centerY = height * 0.5;

    multDelta = noise(0.01 * frameCount + pow(2, 8));
    multDelta = map(multDelta, 0, 1, -0.0001, 0.0001);
    multMax = constrain(multMax + multDelta, 0.005, 0.2);
    mult = random(-multMax, multMax);
    smoke.pos3x = abs(((width * mult) + smoke.pos2x) % width);
    mult = random(-multMax, multMax);
    smoke.pos3y = abs(((height * mult) + smoke.pos2y) % height);


    mult = noise(frameCount * 0.001) * 255;
    redFill = constrain(mult, 0, 255);

    noStroke();
    // stroke(200, 20);
    // get a random noise value between (0-1)
    alphaNoise = noise(0.1 * frameCount + 1000);
    alphaNoise = map(alphaNoise, 0, 1, -2, 2);
    alphaAmt += alphaNoise;
    alphaAmt = constrain(alphaAmt, 20, 100);
    fill(redFill, 255 - redFill, 175, 30);

    triangle(smoke.pos1x, smoke.pos1y, smoke.pos2x, smoke.pos2y, smoke.pos3x, smoke.pos3y);

    smoke.pos1x = smoke.pos2x;
    smoke.pos1y = smoke.pos2y;
    smoke.pos2x = smoke.pos3x;
    smoke.pos2y = smoke.pos3y;

    //////// DEBUGGING STUFF /////////////
    // ellipse(centerX, centerY, 40, 40);
    // push();
    // translate(10, height - 40);
    // fill(255);
    // rect(0,0,150,25);
    // fill(0);
    // text(frameRate(), 5, 20);
    // pop();
}



/* FULLSCREEN FUNCTIONALITY */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(bgColor);
}

function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}
