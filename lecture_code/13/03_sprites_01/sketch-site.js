
let cats = [];
let cat_img;
let bg = '#b17cc9';

function preload() {
    cat_img = loadImage("./images/runningcat.png");
}


function setup() {
    createCanvas(windowWidth,windowHeight);
    background(bg);
    cats[0] = new Cat(100, 100, cat_img, 0);
    cats[1] = new Cat(1015, 100, cat_img, 1);
}

function draw() {
    background(bg);

    for (let i = 0; i < cats.length; i++) {
        cats[i].frame();
    }

}



////////////////////////////////////////////////
/* CAT CLASS */

class Cat {
    constructor(init_x, init_y, img, orientation){
        this.pos = {
            x: init_x,
            y: init_y
        };

        this.orientation = orientation;

        // A reference to a pre-loaded image in memory
        this.image = img;
        // The speed at which to work through subrectangles
        this.speed = 4;
        // The size of our subrectangles
        // corresponds to sprite size
        this.size = {
            w: 512,
            h: 256
        };
        // The number of the sprite image we are on
        this.sprite_num = 0;
        // The top-left corner of each sub-rectangle
        this.subRect = [
            [0, 0],
            [512, 0],
            [0, 256],
            [512, 256],
            [0, 512],
            [512, 512],
            [0, 768],
            [512, 768],
        ];

    }

    frame() {
        this.display();
        this.animate();
    }

    display() {
        push();

        translate(this.pos.x, this.pos.y);

        if (this.orientation === 0) {
            scale(1,1);
        } else if (this.orientation === 1) {
            scale(-1,1);
        }

        image(
            // reference to image in memory
            this.image,
            // placement of image on canvas
            // (handled by translate())
            0, 0,
            // The display size of the image
            this.size.w, this.size.h,
            // The top left corner of the sub rectangle
            this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],
            // the size of the subrectangle
            this.size.w, this.size.h
        );
        
        pop();
    }

    animate() {
        // update the sprite num
        // This adjusts the subrectangle positions
        if (frameCount % this.speed === 0) {
            this.sprite_num++;
            this.sprite_num %= 8;
        }
    }

}
