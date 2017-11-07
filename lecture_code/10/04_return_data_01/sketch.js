function setup() {
    createCanvas(windowWidth, 400);
    frameRate(3);
}

function draw() {
    background('rgb(91, 255, 147)');

    let num1 = floor(random(0, 200));
    let num2 = floor(random(0, 200));

    let pos = addThings(num1, num2);

    smileyFace( pos, pos, pos/200, 1.0 );
}


/* ADD THINGS FUNCTION */
function addThings(value1, value2) {
    // 1. Add the values together. Store them into some variable.
    let result = value1 + value2;

    // 2. Return the value
    return result;
}


/* SMILEY FACE FUNCTION */
function smileyFace(pos_x, pos_y, scale_x, scale_y) {
    push(); // <- Begin sandbox

    // 1. scale and position smiley face
    translate(pos_x, pos_y);
    scale(scale_x, scale_y);

    // 2. draw smiley face
    stroke(0);
    fill('rgba(234, 255, 61, 1.0)');
    ellipse(0, 0, 100);
    noStroke();
    fill(40, 255);
    arc(0, 15, 75, 50, 0, PI);
    ellipse(-20, -15, 20);
    ellipse(20, -15, 20);

    pop(); // <- End sandbox
}
