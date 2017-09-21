

var numOfFaces = 10;
var faces = [];

function setup() {
    createCanvas(800,600);
    // frameRate(2);

    for (var i = 0; i < numOfFaces; i++) {
        faces.push(
            {
                currNum: 10,
                x: 100,
                y: 100,
                size: 40,

                initPos: function(){
                    this.x = random(width);
                    this.y = random(height);
                },

                changePos: function(){
                    this.x += 1;
                    if (this.x >= width) {
                        this.initPos();
                    }
                },

                display: function(){
                    push();
                    translate(this.x, this.y);

                    ellipse(0, 0, this.size, this.size);

                    ellipse(-this.size*0.25, -this.size*0.25, this.size*0.2, this.size*0.2)
                    ellipse(this.size*0.25, -this.size*0.25, this.size*0.2, this.size*0.2)
                    pop();
                }
            }
        )
    }
}

function draw() {

    background('#b283e8');

    for (var i = 0; i < faces.length; i++) {
        faces[i].display();
        faces[i].changePos();
    }


}
