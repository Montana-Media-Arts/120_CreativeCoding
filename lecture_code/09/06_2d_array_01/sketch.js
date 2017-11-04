
// define locations of a star
let starArr = [
    [0, -9],
    [7, 9],
    [-9, -2],
    [9, -2],
    [-7, 9]
];
let idx = 0;

function setup() {
    createCanvas(windowWidth, 500);
    background(18, 82, 189);
    frameRate(2);
}

function draw() {

    translate( width/2, height/2 );

    // create a modulus wrapped plus-one idx
    let idxPlus = (idx + 1) % starArr.length;

    // grab the 2 points defining a line
    let x1 = starArr[idx][0] * 10;
    let y1 = starArr[idx][1] * 10;
    let x2 = starArr[idxPlus][0] * 10;
    let y2 = starArr[idxPlus][1] * 10;

    // draw the line
    strokeWeight(18);
    stroke(random(255), random(255), random(255), 150);
    line(x1, y1, x2, y2);

    // increment the idx
    idx = (idx + 1) % starArr.length;
}
