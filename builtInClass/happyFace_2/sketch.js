// define an object
var happyFace = {
	// set the object parameters
	eyeColor: 'red',
	faceColor: 'blue',

	// set the object functions
	bg: function() {
		var c = color(this.faceColor);
		background(c);
	}

};


function setup() {
	createCanvas(800,400);
}

function draw() {

	// call the object and a function
	happyFace.bg();

}
