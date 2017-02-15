function setup() {
    createCanvas(600,700);
}


function draw() {
    var bgRed, bgGreen, bgBlue;

    // Mapping mouseX to a usable range
    // bgVal = mouseX;
    // bgVal = mouseX * 0.425;
    bgRed = map(mouseX, 0, 600, 0, 255);
    bgGreen = map(mouseY, 0, 600, 0, 255);
    bgBlue = map(mouseX + mouseY, 0, 1200, 255, 0);


    background(bgRed, bgGreen, bgBlue);

    text(mouseX, 200, 160);
    text(mouseY, 200, 180);
    text(mouseX + mouseY, 200, 200);
    text(bgRed, 200, 230);
    text(bgGreen, 200, 250);
    text(bgBlue, 200, 270);
}
