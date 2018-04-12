/**
* @Author: Musick, Michael <michaelmusick>
* @Date:   04-03-2016 16:11
* @Email:  michael@michaelmusick.com
* @Last modified by:   michaelmusick
* @Last modified time: 19-10-2016 09:35

Automatic PacMan Example
*/

// Define an empty PacMan object Array
let pacmans = [];
let numPacMans = 50;

// setup function
function setup() {
	createCanvas(windowWidth, 800);

	// create some pacmans
	let xpos = 0;
	let ypos = 20;
	let diam = 0;
	for (let i = 0; i < numPacMans; i++) {
		diam = round(random(10,60));
		xpos = xpos + random(60, 300);
		if( xpos >= width - 21){
			ypos = ypos + 80;
			xpos = diam;
		}
		pacmans[i] = new PacMan(xpos, ypos, diam );
	}
}

// draw loop
function draw() {
	let tempArr = [];
	background(80);

	// update pacman positions
	for (let i = 0; i < pacmans.length; i++) {
		// check neihbors by passing in an array of other PacMan's
		tempArr = pacmans.slice(0,i);
		tempArr = tempArr.concat( pacmans.slice(i+1, pacmans.length) );
		pacmans[i].checkPos( tempArr );

		pacmans[i].draw();
	}

}


//////////////////////////////////////////////
// PacMan Class
//////////////////////////////////////////////

class PacMan {

    // constructor for PacMan
    constructor(xpos, ypos, diam) {
        // shape
        this.diam = diam;
        this.radius = this.diam / 2;
        this.eyePos = this.diam / 7;
        this.eyeDiam = this.diam / 8;
        this.mouthAngle = (1 / 6);
        this.mouthChange = 1 / 128;

        //  position and movement
        this.xpos = xpos;
        this.ypos = ypos;
        this.direction = 0;
        this.change = 0;
        this.xChange = 0;
        this.yChange = 0;
        this.maxDirChange = 4;
        this.wait = false;

        // timing
        this.curTime = 0;
        this.maxTime = 8;
        this.targetTime = random(this.maxTime);

        this.curDist = 0;
        this.minDist = 0;
        this.xDiff = 0;
        this.yDiff = 0;

    }


    draw() {
        // call move
        this.timer();
        this.move();

        push();
        translate(this.xpos, this.ypos);

        // check direction and rotate PacMan
        if (this.direction === 0) {
            // do nothing
        } else if (this.direction === 1) {
            rotate(PI / 2);
        } else if (this.direction === 2) {
            scale(-1, 1);
        } else if (this.direction === 3) {
            rotate(-PI / 2);
        }

        // draw the pacman
        // body
        fill(color("Yellow"));
        arc(0, 0, this.diam, this.diam, PI * this.mouthAngle, -PI * this.mouthAngle, PIE);
        // eyes
        fill(color("Black"));
        arc(this.eyePos, -this.eyePos * 2, this.eyeDiam, this.eyeDiam, PI * this.mouthAngle * 2, -PI * this.mouthAngle * 2, PIE);

        // // testing text TODO: remove later
        // text(this.direction, this.radius, -20);
        // text(this.minDist, this.radius, -10);
        // text(this.curDist, this.radius, 0);
        // text(this.xDiff, this.radius, 10);
        // text(this.yDiff, this.radius, 20);

        pop();
    }


    //  Moe Function
    move() {
        // update position
        if (!this.wait) {
            this.xpos += this.xChange;
            this.ypos += this.yChange;
        }

        //  mouth animation
        this.mouthAngle = this.mouthAngle + (this.mouthChange * this.change);
        if (this.mouthAngle > (1 / 6)) {
            this.mouthChange = -this.mouthChange;
            this.mouthAngle = (1 / 6);
        }
        if (this.mouthAngle < 0.01) {
            this.mouthChange = -this.mouthChange;
            this.mouthAngle = 0.03;
        }


        // edge check
        if (this.xpos + this.radius >= width) {
            this.xpos = width - this.radius;
            this.xChange = 0;
        } else if (this.xpos - this.radius <= 0) {
            this.xpos = 0 + this.radius;
            this.xChange = 0;
        }

        if (this.ypos + this.radius >= height) {
            this.ypos = height - this.radius;
            this.yChange = 0;
        } else if (this.ypos - this.radius <= 0) {
            this.ypos = 0 + this.radius;
            this.yChange = 0;
        }
    }


    // Timer
    timer() {
        var curTime = this.curTime;
        if (curTime >= this.targetTime * frameRate()) {
            // change direction and update timer
            this.changeDirection();
        } else {
            this.curTime++;
        }
    }


    changeDirection() {
        var newDirection;

        // reset timer
        this.curTime = 0;
        this.targetTime = random(this.maxTime);

        // choose a new direction
        do {
            newDirection = floor(random(4));
            // loop if random chooses same as previous
        } while (newDirection == this.direction);

        this.direction = newDirection;

        // get a new travel speed
        this.change = random(this.maxDirChange);
        // assign direction values accordingly
        if (newDirection === 0) {
            // East
            this.xChange = this.change;
            this.yChange = 0;
        } else if (newDirection === 1) {
            // South
            this.xChange = 0;
            this.yChange = this.change;
        } else if (newDirection === 2) {
            // West
            this.xChange = -this.change;
            this.yChange = 0;
        } else if (newDirection === 3) {
            // North
            this.xChange = 0;
            this.yChange = -this.change;
        }
    }


    // distance checks
    checkPos(pacArray) {
        var minDist = 0;
        var curDist = 0;
        var xDiff = 0;
        var yDiff = 0;

        this.wait = false;
        for (var i = 0; i < pacArray.length; i++) {
            curDist = dist(this.xpos, this.ypos, pacArray[i].xpos, pacArray[i].ypos);
            // minDist = sqrt(pow(this.diam,2) + pow(pacArray[i].diam,2));
            minDist = this.radius + abs(this.xChange) + abs(this.yChange) + pacArray[i].radius;

            xDiff = pacArray[i].xpos - this.xpos;
            yDiff = pacArray[i].ypos - this.ypos;

            if (this.direction === 0 && curDist <= minDist && xDiff > 0) {
                // check for conflict to the east
                this.wait = true;
            } else if (this.direction == 1 && curDist <= minDist && yDiff > 0) {
                // check for conflicts to the south
                this.wait = true;
            } else if (this.direction == 2 && curDist <= minDist && xDiff < 0) {
                // check for conflicts to the south
                this.wait = true;
            } else if (this.direction == 3 && curDist <= minDist && yDiff < 0) {
                // check for conflicts to the south
                this.wait = true;
            }

        }
    }

}
