var bars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  var b = new Bar(0, height / 2, width, 1);
  bars.push(b);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  for (var i = 0; i < bars.length; i++) {
    bars[i].update();
    bars[i].display();
  }
}

function Bar(x, y, l, direction) {
  this.x = x;
  this.y = y;
  this.xlength = l;
  this.ylength = random(5, 25);
  this.direction = direction;
  if (this.direction == 1) {
    this.num = windowWidth;
  } else {
    this.num = random(10, 20);
  }
  this.yvals = [this.y + 3, this.y - 3, this.y + 3, this.y - 3];

  this.update = function() {
    if (this.yvals.length < this.num) {

      if (this.direction == 1) {
        this.yvals.push(this.y + random(-3, 3));
      } else if (this.direction == 2) {
        var index = this.yvals.length - 1;
        var newVal = this.yvals[index] + random(-5, -1);
        this.yvals.push(newVal);
      } else if (this.direction == 3) {
        var index = this.yvals.length - 1;
        var newVal = this.yvals[index] + random(1, 5);
        this.yvals.push(newVal);
      }

    }
  }
  this.display = function() {
    if (this.direction == 1) {
      beginShape();
      for (var i = 0; i < this.yvals.length; i++) {
        curveVertex(this.x + (i * 5), this.yvals[i]);
      }
      endShape();
    } else if (this.direction == 2) {
      line(this.x, this.y, this.x + this.xlength, this.y - this.ylength);
    } else if (this.direction == 3) {
      line(this.x, this.y, this.x + this.xlength, this.y + this.ylength)
    }
  }
}

function mousePressed() {
  var b = new Bar(mouseX, height / 2, random(5, 25), round(random(2, 3)));
  bars.push(b);
}