function setup() {

	createCanvas(800,400);
	background(240);

	translate(400, 200);

	strokeWeight(5);
	fill(200,20,37);

	arc(-140,0,60,60, PI / 4, -PI / 4);
	arc(-70,0,60,60, PI / 4, -PI / 4, OPEN);
	arc(0,0,60,60, PI / 4, -PI / 4, CHORD);
	arc(70,0,60,60, PI / 4, -PI / 4, PIE);


}
