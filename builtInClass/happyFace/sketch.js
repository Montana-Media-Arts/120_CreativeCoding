var happyFace = {
	d: 80,
	posX: 400,
	posY: 200,
	move: function(){
		this.posX = this.posX + 1;
	},

	drawing: function(){
		translate(this.posX, this.posY);
		ellipse(0,0,this.d,this.d);
		arc(-20,-10,15,15,PI,TWO_PI);
		arc(20,-10,15,15,PI,TWO_PI);
		arc(0,10,40,40,TWO_PI,PI);

	}
};

function setup() {
	createCanvas(800,400);
}

function draw() {
	background(0);
	happyFace.drawing();
	happyFace.move();

}
