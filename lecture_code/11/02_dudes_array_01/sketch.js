let dudes = [];
let num_of_dudes = 20;
let bg_color;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);
    bg_color = color(34, 131, 157);

    for (let i = 0; i < num_of_dudes; i++) {
        dudes.push( new MarchingDude() );
    }
}

function draw() {
    background(bg_color);

    for (var i = 0; i < dudes.length; i++) {
        dudes[i].frame();
    }
}





/////////////////////////////////////////
//      Marching Dude Class
/////////////////////////////////////////

/**
 * MarchingDude Class. Creates creepy marching things.
 *
 */
class MarchingDude {

    constructor() {
        this.size_w = random(20, 80);
        this.size_h = random(20, 80);
        this.loc_x = random(width);
        this.loc_y = random(height);
        this.move_x = random(-2, 2);
        this.move_y = random(-2, 2);
        this.body_color = color(random(255), random(255), random(255));
        this.size_w = this.size_w;
        this.size_h = this.size_h;
        this.eye_x = this.size_w * 0.165;
        this.eye_y = this.size_h * 0.33 * -1;
        this.eye_size = this.size_w * 0.25;
        this.feet_x = this.size_w * 0.25 + (this.size_w * 0.25);
        this.feet_y = this.size_h * 0.5;
        this.feet_w = this.size_w * 0.75;
        this.feet_h = this.size_h * 0.4;
        this.left_foot_angle = 0;
        this.right_foot_angle = 0;
        this.foot_angle_delta = random(3);
        this.foot_angle_max = -20;
        this.active_foot = 0;
    }

    // call this method once per frame to update marching dude
    frame() {
        this.feetAngle();
        this.display();
        this.move();
    }

    display() {

        push();

        translate(this.loc_x, this.loc_y);
        fill(this.body_color);

        ellipse(0, 0, this.size_w, this.size_h);

        // eyes
        fill(255);
        ellipse(-this.eye_x, this.eye_y, this.eye_size, this.eye_size);
        ellipse(this.eye_x, this.eye_y, this.eye_size, this.eye_size);

        // feet
        push();
        rotate(PI * (this.right_foot_angle * 0.01));
        translate(this.feet_x, this.feet_y);
        scale(1, -1);
        arc(0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD);
        pop();
        push();
        rotate(PI * -(this.left_foot_angle * 0.01));
        translate(-this.feet_x, this.feet_y);
        scale(-1, -1);
        arc(0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD);
        pop();

        pop();
    }

    feetAngle() {

        if (this.active_foot === 0) {
            this.left_foot_angle -= this.foot_angle_delta;
            if (this.left_foot_angle <= this.foot_angle_max) {
                this.foot_angle_delta *= -1;
            }
            if (this.left_foot_angle >= 0) {
                this.active_foot = 1;
                this.foot_angle_delta *= -1;
            }
        } else if (this.active_foot === 1) {
            this.right_foot_angle -= this.foot_angle_delta;
            if (this.right_foot_angle <= this.foot_angle_max) {
                this.foot_angle_delta *= -1;
            }
            if (this.right_foot_angle >= 0) {
                this.active_foot = 0;
                this.foot_angle_delta *= -1;
            }
        }

        // console.log(this.left_foot_angle);
    }

    move() {
        this.loc_x += this.move_x;
        this.loc_y += this.move_y;

        if (this.loc_x >= width) {
            this.move_x *= -1;
            this.loc_x = width - abs(this.move_x);
        } else if (this.loc_x <= 0) {
            this.move_x *= -1;
            this.loc_x = abs(this.move_x);
        } else if (this.loc_y >= height) {
            this.move_y *= -1;
            this.loc_y = height - abs(this.move_y);
        } else if (this.loc_y <= 0) {
            this.move_y *= -1;
            this.loc_y = abs(this.move_y);
        }
    }
}
