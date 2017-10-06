function setup() {
    createCanvas(600,700);
}


function draw() {
    var fillColor;
    var ellipseSize;

    // Mapping mouseX to a usable range
    fillColor = map(mouseX, 0, 600, 0, 255);
    ellipseSize = map(mouseY, 0, 600, 300, 100);

    fill(fillColor);
    ellipse(mouseX, mouseY, ellipseSize, ellipseSize);

    text(mouseX, 200, 200);
    text(fillColor, 200, 230);
}
