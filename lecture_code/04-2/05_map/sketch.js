function setup() {
    createCanvas(600,700);
}


function draw() {
    var bgVal;

    // Mapping mouseX to a usable range
    // bgVal = mouseX;
    // bgVal = mouseX * 0.425;
    bgVal = map(mouseX, 0, 600, 0, 255);

    background(bgVal);

    text(mouseX, 200, 200);
    text(bgVal, 200, 230);
}
