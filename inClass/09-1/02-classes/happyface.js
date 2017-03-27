/* CLASS FILE FOR HAPPYFACE */


// Constructor Method for the class 'Happyface'
// A constructor method is used to create a new object
// NOTE: Typically you should capitalize class names
function Happyface(init_x, init_y, init_size, delta){
    this.x = init_x;
    this.y = init_y;
    this.size = init_size;
    this.delta = delta;

    this.move = function(){
        this.x += this.delta;
        this.checkEdges();
    };

    this.checkEdges = function(){
        if (this.x >= width) {
            this.x = width - 1;
            this.delta *= -1;
        } else if (this.x <= 0) {
            this.x = 0 + 1;
            this.delta *= -1;
        }
    }
}

// Another method to be called
// This will display our happyface object.
Happyface.prototype.display = function(){
    push();
    translate(this.x, this.y);

    ellipse(0, 0, this.size, this.size);

    ellipse(-this.size*0.25, -this.size*0.25, this.size*0.2, this.size*0.2);
    ellipse(this.size*0.25, -this.size*0.25, this.size*0.2, this.size*0.2);
    pop();
};
