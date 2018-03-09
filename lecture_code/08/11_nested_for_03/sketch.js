// FORM+CODE
// Casey Reas and Chandler McWilliams

let option = 5;
function setup() {
  createCanvas(windowWidth, 800);
  noFill();
}

function draw() {
  background(255);
  let density = map(mouseX, 0, width, 20, 50);

  if (option == 1) {
    // Option 1: Stitches
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        line(x-5, y-5, x+5, y+5);
        line(x+5, y-5, x-5, y+5);
      }
    }
  }
  else if (option == 2) {
    // Option 2: Perspective
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        line(x, y, width/2, height/2);
      }
    }
  }
  else if (option == 3) {
    // Option 3: Overlapping circles
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        ellipse(x, y, 40, 40);
      }
    }
  }
  else if (option == 4) {
    // Option 4: Rotating arcs
    let count = 120;
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        let s = map(count, 120, 0, 0, TWO_PI*2);
        arc(x, y, 14, 14, s, s + PI);
        count--;
      }
    }
  }
  else if (option == 5) {
    // Option 5: Groups of five
    for (let x = 50; x < width-50; x += density) {
      for (let y = 50; y < height-50; y+=density) {
        //rect(x-10, y-10, 22, 22);
        for (let i = 0; i < 16; i+=4) {
          line(x + i, y, x + i, y + 12);
        }
        line(x, y, x + 12, y + 12);
      }
    }
  }
}

function mousePressed() {
  option++;
  if (option > 5) option = 1;
}
