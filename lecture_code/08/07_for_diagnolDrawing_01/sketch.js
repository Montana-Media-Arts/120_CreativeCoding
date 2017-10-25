function setup() {
	createCanvas( windowWidth, 400 );
	background( 200, 0, 40 );
}



function draw() {
	// establish scoped variables 
	let padding = 20;
	let size = 20;
	let num_of_objs = 30;
	// to determine spacing, 
	// first determine the amount available space
	// then devide by one less than the desired number of objects
	let x_spacing = (width-padding*2) / (num_of_objs-1);
	let y_spacing = (height-padding*2) / (num_of_objs-1);
	
	rectMode( CENTER );
	for( let i=0; i < num_of_objs; i++ ) {
		rect( 
			// to determine spacing;
			// multiply the iterator (i) by the spacing. 
			// add padding to offset from (x:0, y:0)
			i*x_spacing+padding, 
			i*y_spacing+padding, 
			size, 
			size 
		);
	}
}