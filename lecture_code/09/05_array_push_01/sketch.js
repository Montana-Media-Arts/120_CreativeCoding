let circleSize = [];

function setup() {
    createCanvas(windowWidth, 400);

    for (let num = 0; num < 10; num++) {
        // create and push in a new random number
        circleSize.push(random(20, 200));
    }
}

function draw() {
    background('white');
    stroke('rgb(177, 177, 177)');
    fill('rgba(143, 255, 248, 0.6)');

    for (let idx = 0; idx < circleSize.length; idx++) {
        xpos = windowWidth / circleSize.length * idx + 30;
        ellipse(xpos, 100, circleSize[idx]);
    }
}
