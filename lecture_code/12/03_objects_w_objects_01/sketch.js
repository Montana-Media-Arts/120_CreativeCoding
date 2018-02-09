// Bouncing Balls
// Week 12


// create a variable for the ball object
let balls = [];
const numOfBalls = 20;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);

    // create a new ball object of class type "Ball"
    let init_x = 60;
    let init_y = 60;
    for ( let i = 0; i < numOfBalls; i++ ) {
        balls.push( new Ball( init_x, init_y ) );
        // move the starting position over
        // This is to ensure that the balls do not start
        // "on top" of each other
        init_x += 100;
        if( init_x > width ) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background( 'rgb(66, 57, 66)' );

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].move();
        balls[i].edgeCheck();
        balls[i].display();
    }
}






//////////////////////////////////////////////////
//      BALL CLASS DEFINITION
//////////////////////////////////////////////////
class Ball {
    constructor(x, y, size) {
        this.color = 'red';
        this.size = random(20, 80);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-10, 10);
        this.deltaY = random(-10, 10);
    }

    display() {
        push();
        // remove the balls outer stroke
        noStroke();
        // set the balls fill color
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if the ball has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = 'rgb(110, 240, 158)';
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'rgb(110, 240, 158)';
        }
    }
}
