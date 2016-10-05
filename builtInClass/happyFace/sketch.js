var happyFace = {
	d: 80,
	posX: 400,
	posY: 200,
	speedX: 1,
	dirX: 1,
	move: function(){
		this.posX = this.posX + (this.speedX*this.dirX);
		if (this.posX>=width || this.posX<= 0) {
			this.dirX= -1*this.dirX;
			this.speedX= random(20);
		}
	},
	setupFace: function(){
		this.posX= random(width);
		this.posY= random(height);

	},
	drawing: function(){
		translate(this.posX, this.posY);
		ellipse(0,0,this.d,this.d);
		arc(-20,-10,15,15,PI,TWO_PI);
		arc(20,-10,15,15,PI,TWO_PI);
		arc(0,10,40,40,TWO_PI,PI);

		this.move();
	}
};


function setup() {
	createCanvas(800,400);
	happyFace.setupFace();
}

function draw() {
	background(0);
	happyFace.drawing();

}
