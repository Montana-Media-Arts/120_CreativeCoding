// From Daniel Shiffman
// Coding Train - https://github.com/CodingTrain/Rainbow-Code/tree/master/Tutorials/P5JS/p5.js/07/7.3_p5js_Arrays_of_Objects
//


let bubbles = [];

function setup() {
    createCanvas(windowWidth, 400);
    let b = new Bubble(width/2, height/2, 10);
    bubbles.push(b);
}

function mouseDragged() {
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}
