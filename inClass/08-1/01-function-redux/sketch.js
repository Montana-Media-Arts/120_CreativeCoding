
var bg_color;

var dude;

function setup() {
    createCanvas(800,600);
    bg_color = color(34, 131, 157);
    background(bg_color);

    var size_w = random(20, 80);
    var size_h = random(20, 80);

    dude = {
        loc_x: random(width),
        loc_y: random(height),
        move_x: 1,
        move_y: 1,
        body_color: color(147, 56, 143),
        size_w: size_w,
        size_h: size_h,
        eye_x: size_w * 0.165,
        eye_y: size_h * 0.33 * -1,
        eye_size: size_w * 0.25,
        feet_x: size_w * 0.25 + (size_w * 0.25),
        feet_y: size_h * 0.5,
        feet_w: size_w * 0.75,
        feet_h: size_h * 0.4,
        left_foot_angle: 0,
        right_foot_angle: 0,
        foot_angle_delta: 2,
        foot_angle_max: -20,
        active_foot: 0,


        display: function(){

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
            rotate(PI*(this.right_foot_angle*0.01));
            translate(this.feet_x, this.feet_y);
            scale(1, -1);
            arc(0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD);
            pop();
            push();
            rotate(PI*-(this.left_foot_angle*0.01));
            translate(-this.feet_x, this.feet_y);
            scale(-1, -1);
            arc(0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD);
            pop();

            pop();
        },

        feetAngle: function(){

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

            console.log(this.left_foot_angle);
        },

        move: function(){
            this.loc_x += this.move_x;
            this.loc_y += this.move_y;

            if (this.loc_x >= width) {
                this.move_x *= -1;
                this.loc_x = width - abs(this.move_x);
            } else if ( this.loc_x <= 0 ){
                this.move_x *= -1;
                this.loc_x = abs(this.move_x);
            } else if ( this.loc_y >= height ) {
                this.move_y *= -1;
                this.loc_y = height - abs(this.move_y);
            } else if ( this.loc_y <= 0 ){
                this.move_y *= -1;
                this.loc_y = abs(this.move_y);
            }
        }
    };

}





///////////////////////////////////////////
function draw() {
    background(bg_color);

    dude.feetAngle();
    dude.display();
    dude.move();

}
