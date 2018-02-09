function setup() {
    createCanvas( windowWidth, 200 );
}


function draw() {
    background(200);
    eSize = 15;
    x1 = mouseX;
    y1 = height * 0.75;
    x2 = sqrt(x1);
    y2 = height * 0.25;

    // Draw the non-squared.
    line(0, y1, width, y1);
    ellipse(x1, y1, eSize, eSize);

    // Draw the squared.
    line(0, y2, width, y2);
    ellipse(x2, y2, eSize, eSize);

    // Draw dividing line.
    stroke(100);
    line(0, height/2, width, height/2);

    // Draw text.
    noStroke();
    fill(0);
    textSize(26);
    let spacing = height * 0.2;
    text("x = " + x1, 10, y1 + spacing);
    text("sqrt(x) = " + x2, 10, y2 + spacing);
}
