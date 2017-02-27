
var count = 0;

function setup() {
  createCanvas(400,400);
  frameRate(2);
}

function draw() {
  background(255);
  textSize(36);


  text(count, 10, 50);

  // relational operators
  if ( count >= 10 ) {
    text("Everything is awesome", 40, 40);
  } else {
    ellipse(200, 200, count*4, count*4);
    count++;
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
