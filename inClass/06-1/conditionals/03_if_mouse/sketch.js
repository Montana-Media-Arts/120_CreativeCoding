

function setup() {
  createCanvas(400,400);
  frameRate(2);
}

function draw() {
  background(255);
  textSize(36);

  // relational operators
  if ( mouseX > width * 0.5 ) {
    text("This was true!!!", 40, 40);
  } else {
    text("NOOOOOOOOOOOOO", 80, 80);
  }

}


/*
What other relational operators are there?

'<' -> less than
'>' -> greater than
'<=' -> less than or equal
'<=' -> greater than or equal
'==' -> is equal
'===' -> is equal and same type

 */
