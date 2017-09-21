/* BIRD CLASS */

// created: 2017-03-27
// by: the MART191 Creative Coding Class | Spring 2017


// constructor method
function Bird(init_x, init_y, size_w){
    this.x = init_x;
    this.y = init_y;
    this.w = size_w;
    this.h = size_w;
    this.delta_x = random(1, 4);
    this.delta_y = random(1, 4);
    this.color = color(floor(random(255)),floor(random(255)),floor(random(255)));
}

// a display function
Bird.prototype.display = function() {
    // Draw a bird
    push();
    translate(this.x, this.y);
    fill(this.color);
    ellipse(0, 0, this.w, this.h);
    translate(this.w/2,0);
    fill('#fff')
    triangle(-2,this.h * -0.1,-2,this.h * 0.1,this.w*0.1,0);
    pop();
};


Bird.prototype.move = function () {
    this.x += this.delta_x;
    this.y += this.delta_y;
    this.checkEdges();
};

Bird.prototype.checkEdges = function () {
    if (this.x + this.w/2 >= width) {
        this.x = width - 1 - this.w/2;
        this.delta_x *= -1;
    } else if (this.x - this.w/2 <= 0) {
        this.x = 0 + 1 + this.w/2;
        this.delta_x *= -1;
    }
    if (this.y + this.h/2 >= height) {
        this.y = height - 1 - this.h/2;
        this.delta_y *= -1;
    } else if (this.y - this.h/2 <= 0) {
        this.y = 0 + 1 + this.h/2;
        this.delta_y *= -1;
    }
};
