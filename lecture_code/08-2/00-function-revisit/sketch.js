let location1 = 10;
let location2 = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(18, 82, 189);
    frameRate(12);
}

function draw() {
    let returnlocation = randomstick(location1, location2);

    background(18, 82, 189, 15);
    location1 = returnlocation[0];
    location2 = returnlocation[1];
}

function randomstick(x1, y1) {

    let x2 = random(0, width);
    let y2 = random(0, height);

    strokeWeight(18);
    stroke(random(255), random(255), random(255));

    line(x1, y1, x2, y2);

    // return an array to store for next iteration
    return [x2, y2];
}
