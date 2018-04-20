var swords = [];


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //WEBGL, the magic word that makes the sketch pop out of 2D constraints
  //background(0);
  for (var i = 0; i < 10; i++) {
    swords[i] = new Swords(width, height, random(40, 120));
  }

}

function draw() {
  background(0);
  var mouseLocY = (mouseY / height - 0.5) * (-2);
  var mouseLocX = (mouseX / width - 0.5) * 2;

  pointLight(random(40), random(40), random(40), mouseLocX, mouseLocY, 0);
  //this makes a mouse light that points at the center ball,and makes it appear to roll

  //orbitControl(); 
  //another handy 3d function I found, lets you click and drag to look around. camera resets when you let go
  //camera(mouseX, mouseY, 500); //experimenting...
  camera(0, 0, 500);

  translate(width / width, height / height);
  //this was an interesting development. width/2 places the ball in the bottom right corner, so somehow, dividing width by itself makes it centered in WEBGL. who knew?
  rotateY(frameCount * 0.01);
  //this is my special secret. rather than trying to calculate the focal point and rotation of the camera, as well as a 
  //circular track for it to move along, i just rotated the whole sketch on the y axis. same effect for a lot less code.
  push();
  ambientLight(random(25), random(25), random(25)); //this gives the center ball a faint blinking color like in the original.
  sphere(80);
  for (var i = 0; i < swords.length; i++) {
    swords[i].draw();
    swords[i].move();
    swords[i].spin();
  }
  pop();
}

//this reshuffles a random amount of the tops on click
function mousePressed() {
  var r = random(21);
  for (var s = 0; s < r; s++) {
    swords[s] = new Swords(width, height, random(40, 120));
    swords[s].draw();
    swords[s].move();
    swords[s].spin();
  }
  //for (var i = 0; i < swords.length; i++) {
  //}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}