let bubbles = [];

function setup() {
    createCanvas(windowWidth, 600);
    let b = new Bubble(width / 2, height / 2, 10);
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


function mousePressed() {
    // make the bubbles check themselves
    // to see if the mouse is within them.
    for (let i = bubbles.length - 1; i >= 0; i--) {
        let destroyMe = bubbles[i].mouseCheck();
        if (destroyMe) {
            bubbles.splice(i, 1);
        }
    }
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

    // check if the mouse if within this bubble
    mouseCheck() {
        // get the distance between the mouse and the center of the bubble
        let d = dist(this.x, this.y, mouseX, mouseY);
        // check if that distance is less than the bubble radius
        // if it is, then the mouse if within
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }
}
