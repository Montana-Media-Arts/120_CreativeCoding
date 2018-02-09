function setup() {
    createCanvas( windowWidth, 150 );
}


function draw() {
  background( 'rgb(137, 140, 204)' );

  let leftWall = 50;
  let rightWall = width - 50;

  // xm is just the mouseX, while
  // xc is the mouseX, but constrained
  // between the leftWall and rightWall!
  let xm = mouseX;
  let xc = constrain(mouseX, leftWall, rightWall);

  // Draw the walls.
  stroke( 'red' );
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);

  // Draw xm and xc as circles.
  noStroke();
  fill(255);
  ellipse(xm, 33, 9,9); // Not Constrained
  fill(0);
  ellipse(xc, 66, 9,9); // Constrained
}
