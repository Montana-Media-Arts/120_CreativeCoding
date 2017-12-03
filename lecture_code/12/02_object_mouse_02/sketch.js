
let bubbles = [];

function setup() {
    createCanvas(windowWidth, 600);
    let b = new Bubble(width/2, height/2, 10);
    bubbles.push(b);
    bubbleTimer();
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

function bubbleTimer() {
    let b = new Bubble(random(width), random(height), random(200));
    bubbles.push(b);
    // this has the effect of calling itself every x-milliseconds
    setTimeout(bubbleTimer, random(2000));
}



///////////////////////////////////////////////////
// Bubble Class
///////////////////////////////////////////////////
class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
}
