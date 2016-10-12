// define an object
var happyArray = [];
var numOfObjs = 10;


function setup() {
	createCanvas(800,400);

	for (var i = 0; i < numOfObjs; i++) {
		happyArray.push(new HappyFace( (width * i/numOfObjs), random(height), random(256),random(256),random(256)));
	}
}

function draw() {

	background(255,0,0);

	for (var j = 0; j < happyArray.length; j++) {
		for (var i = j + 1; i < happyArray.length; i++) {
			collisionCheck( happyArray[j], happyArray[i] );
		}
	}

	for (var i = 0; i < happyArray.length; i++) {
		happyArray[i].drawFace();
	}
}


// collision check function between two objects
function collisionCheck(obj1, obj2){
	var objDist = dist( obj1.posX, obj1.posY, obj2.posX, obj2.posY );

	var combinedR = obj1.rad + obj2.rad;

	if( objDist <= combinedR ){
		obj1.collision();
		obj2.collision();
	}
}
