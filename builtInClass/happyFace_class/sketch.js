// define an object
var happyArray = [];


function setup() {
	createCanvas(800,400);

	for (var i = 0; i < 100; i++) {
		happyArray.push(new HappyFace(random(256),random(256),random(256)));
	}
}

function draw() {

	background(255,0,0);
	for (var i = 0; i < happyArray.length; i++) {
		happyArray[i].drawFace();
	}

}
