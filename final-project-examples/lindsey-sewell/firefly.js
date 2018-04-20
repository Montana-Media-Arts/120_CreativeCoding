function Bug(init_x, init_y, size, color){
    this.pos = { x: init_x, y: init_y };
    this.vel = { x: random(-2, 2), y: 1 };
    this.size = size;
    this.sizeAdj = 1;
    this.rad = this.size * 0.5;
    this.color = color;
    this.ampoffset = 0;
}

Bug.prototype.display = function () {
    push();

    fill(this.color);
    noStroke();
    translate( this.pos.x, this.pos.y );
    this.ampoffset = map(this.ampoffset, 0, 0.6, 0, this.size * -10);
    translate(0, this.ampoffset);
    push();

    var size = this.size * this.sizeAdj;
    ellipse(0, 0, size, size);
    fill(255, 200, 0, 50);
    ellipse(0, 0, size + 8, size + 8);

    pop();

    pop();
};

Bug.prototype.move = function(){


    this.pos.x += this.vel.x * 2;
   this.pos.y += this.vel.y;


//    this.pos.y = this.pos.y - this.speed;
    //      if (this.pos.y <= 0 - this.size * 2){
  //  this.pos.y = height + this.size * 2;
  //}


    // edge check?
    if (this.pos.x >= width) {
        this.pos.x = width - this.vel.x;
        this.vel.x *= -1;
    } else if (this.pos.x <= 0) {
        this.pos.x = 1 + this.vel.x;
        this.vel.x *= -1;
    }

    if (this.pos.y >= height) {
        this.pos.y = height - this.vel.y;
        this.vel.y *= -1;
    } else if (this.pos.y <= 0) {
        this.pos.y = 1 + this.vel.y;
        this.vel.y *= -1;
    }
};


Bug.prototype.collisionCheck = function(bugArr, myIdx){
    var maxDist, distance, otherBug;


    for (var i = 0; i < bugArr.length; i++) {

        var collision = false;

        otherBug = bugArr[i];

        if (i !== myIdx) {
            distance = dist(this.pos.x, this.pos.y, otherBug.pos.x, otherBug.pos.y);
            maxDist = this.rad + otherBug.rad;

            if (distance <= maxDist) {
                collision = true;
            }

            if (collision) {
                this.vel.x *= -1;
                this.vel.y *= -1;
            }

        }

    }
};
