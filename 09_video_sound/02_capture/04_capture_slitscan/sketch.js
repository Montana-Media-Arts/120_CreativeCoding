var draw_position_x = 0; 

var cur = 0;
var cam;

function setup() {
  devicePixelScaling(false)
  var c = createCanvas(windowWidth, windowHeight);
  c.translate(100, 100)
  imageMode(CENTER);
  background(0);
  cam = createCapture(VIDEO);
  //cam.loadPixels();
  loadPixels();
  stroke(255, 255, 0);
  //frameRate(3)
}

function draw() {

  if (cam) {
    cam.loadPixels();

    for (var y=0; y<height; y++){
      var r = cam.pixels[4*(y*cam.width+cam.width/2)];
      var g = cam.pixels[4*(y*cam.width+cam.width/2)+1];
      var b = cam.pixels[4*(y*cam.width+cam.width/2)+2];
      var a = cam.pixels[4*(y*cam.width+cam.width/2)+3];
      set(draw_position_x, y, [r, g, b, a]);
    }
    updatePixels();

    // loop back around
    draw_position_x++;
    if (draw_position_x >= width) {
      draw_position_x = 0;
    }
  }
}

  