/**
* @Author: Musick, Michael <michaelmusick>
* @Date:   04-03-2016 16:11
* @Email:  michael@michaelmusick.com
* @Last modified by:   michaelmusick
* @Last modified time: 19-10-2016 09:35

Automatic PacMan Example
*/

// Define an empty PacMan object Array
let pacmans = [];
let numPacMans = 100;

// setup function
function setup() {
	createCanvas(windowWidth, windowHeight);

	// create some pacmans
	let xpos = 0;
	let ypos = 20;
	let diam = 0;
	for (let i = 0; i < numPacMans; i++) {
		diam = round(random(10,60));
		xpos = xpos + random(60, 300);
		if( xpos >= width - 21){
			ypos = ypos + 80;
			xpos = diam;
		}
		pacmans[i] = new PacMan(xpos, ypos, diam );
	}
}

// draw loop
function draw() {
	let tempArr = [];
	background(80);

	// update pacman positions
	for (let i = 0; i < pacmans.length; i++) {
		// check neihbors by passing in an array of other PacMan's
		tempArr = pacmans.slice(0,i);
		tempArr = tempArr.concat( pacmans.slice(i+1, pacmans.length) );
		pacmans[i].checkPos( tempArr );

		pacmans[i].draw();
	}

}
