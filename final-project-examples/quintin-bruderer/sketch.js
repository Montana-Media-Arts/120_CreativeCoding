var music;
var smack;
var through;
var wing;
var daytime;
var nightA;

var title, gameDead, tapSpace;

var pidgey, pidgeyAnim, pidgeyStill;

var gravity = .2;
var flapV = -5;
var score = 0
var myFont;

var sky;
var trees;
var buildings;
var ground;
var scoreB;

var pipebird, pipebirdTwo;
var pipes;

var groundX = 0;
var treeX = 0;
var buildX = 0;



var newGame = false;
var gameOver = true;

function preload() { //this is to load all of the asset information
  daytime = round(random(1));
  nightA = round(random(2));

  // assets that will always be used
  pipebird = loadImage('assets/pipeB.png');
  pipebirdTwo = loadImage('assets/pipeB2.png');
  smack = loadSound('assets/Smack.mp3');
  through = loadSound('assets/Through.mp3');
  wing = loadSound('assets/wing.ogg');

  scoreB = loadImage('assets/score.png');
  myFont = loadFont("assets/Pokefont.ttf");

  pidgeyAnim = loadAnimation('assets/pidgeysheet1.png', 'assets/pidgeysheet2.png', 'assets/pidgeysheet3.png', 'assets/pidgeysheet2.png');
  pidgeyStill = loadAnimation('assets/pidgeysheet1.png');

  title = loadImage('assets/title.png');
  gameDead = loadImage('assets/gameOv.png');
  tapSpace = loadImage('assets/tap.png');
  scoreTab = loadImage('assets/score.png');



  //depending on what daytime info is given, will dictate what specific assets load
  if (daytime == 1) {
    music = loadSound('assets/route38.mp3');
    sky = loadImage('assets/backgroundD.png');
    buildings = loadImage('assets/buildingsD.png');
    trees = loadImage('assets/treesD.png');
    ground = loadImage('assets/groundD.png');
    tower = loadImage('assets/pipeD.png');


    //daytime = false;
  } else {
    sky = loadImage('assets/backgroundN.png');
    buildings = loadImage('assets/buildingsN.png');
    trees = loadImage('assets/treesN.png');
    ground = loadImage('assets/groundN.png');
    tower = loadImage('assets/pipeN.png');

    if (nightA < 2) {
      music = loadSound('assets/goldenrod.mp3')

    } else {
      music = loadSound('assets/gamecorner.mp3');
      // daytime = true;
      //nightA = false;
    }
  }
}

function setup() {
  createCanvas(432, 768);
  //createSprite(width / 2, 200, 20, 30);

  music.setVolume(0.2);
  music.play();
  music.loop();
  //if (daytime == 1) {
  // music.loop();
  // }

  pidgey = createSprite(95, height / 2, 48, 45);
  pidgey.setCollider("circle", 0, 0, 15);
  // pidgey.rotateToDirection = true; I need to see how I could get this to slow down. 
  // was unable to use this  ^ due to sudden stuff, as now I have a variable to change it in draw.
  pidgey.addAnimation("still", pidgeyStill);
  pidgey.addAnimation("flapping", pidgeyAnim);

  pipes = new Group();
  pipeCenterz = new Group();

}

function draw() {
  //pidgeyFlap.frameDelay = 6;
  background(sky);
  imageMode(CORNER);

  //this is to place the shit in the canvas
  //placeItems(sky, buildings, trees, ground, tower); //would an array work in here?
  //using my original layout image, I got coordinances to where each piece is to be placed
  //originally these were in setup, but nothing was being drawn, so although groundX was being incrimented, the
  //...image was stuck.
  image(buildings, buildX, 272);
  image(trees, treeX, 423);

  fill(255);

  //text(daytime, 10, 10);
  //text(nightA, 10, 20);


  //groundX = groundX - 2;
  //the math of 96 is the width of Ground: 528 subtract the width of the background/canvas: 432 = 96
  //I made the sprites so they would tile, thus although jumping back LOOKS like a long movement
  var groundSpeed = -4
  if (groundX <= -96) {
    groundX = 0
  }
  //the tree math was similar, but after runing into issue of it cutting half a tree off, I had to figure what
  //..half a tree is pixels and "add" that to the negative number.
  if (frameCount % 10 === 0) {
    treeX = treeX - 2;
    if (treeX <= -192) {
      treeX = 0;
    }
  }
  if (frameCount % 60 === 0) {
    buildX = buildX - 2;
    if (buildX <= -144) {
      buildX = 0;
    }
  }

  if (gameOver) {
    if (keyWentDown(" ")) {
      startGame();
    }
    imageMode(CENTER);
    if (!newGame) {
      image(title, width / 2, height / 5);
      //title.remove();
      image(tapSpace, width / 2, height / 3);
    }
  }

  if (!gameOver && newGame) {
    groundX = groundX + groundSpeed; //No Pipes? Make groundspeed a - and a + negative number is equivalent to -
    pidgey.velocity.y += gravity;
    // originally this if statement was in key went down but couldn't get it to work as I thought it was just
    //..always thinking velocity was less than zero, but outside next to gravity it works great.

    if (keyWentDown(" ")) {
      wing.setVolume(0.3);
      wing.play();
      pidgey.velocity.y = flapV;
    }


    if (pidgey.position.y - pidgey.height / 2 < 0) {
      pidgey.position.y = 0 + pidgey.height / 2;
    }

    var pidgRot = 6
    if (pidgey.velocity.y > 0) {
      pidgey.changeAnimation("still");
      pidgey.rotation = pidgey.rotation + pidgRot;
      if (pidgey.rotation > 65) {
        pidgey.rotation = 65;
      }
    } else {
      pidgey.changeAnimation("flapping");
      pidgey.rotation = pidgey.rotation - (2 * pidgRot);
      if (pidgey.rotation < -35) {
        pidgey.rotation = -35;
      }
    }

    var pipeGap = 90;
    if (frameCount % 90 == 0) { //every 1.5 seconds. 1 second is 2 quick, 2 seconds is too slow
      var pipeStart = round(random(0, 100));
      var pipeH = map(pipeStart, 0, 100, 420, 603);
      //added the map function to add some "flappy bird cuss words toughness"
      var pipe = createSprite(84 + width, pipeH, 84, 498);
      pipe.setCollider("rectangle", 0, 0, 84, 498);
      // 84 is the width of pipe. Without that the pipe spawns too late.
      pipe.addImage(tower)
      pipe.velocity.x = groundSpeed;
      pipes.add(pipe);

      //if (pipeH < 550) {
      // pipeH = 80 - (height-pipeH + pipeGap); 
      //nearly breaking down to use the example, I removed the above, and started fidding with just the bottom code.
      //and somehow magically...I got it
      pipe = createSprite(84 + width, pipeH - (525 + pipeGap), 84, pipeH + pipeGap);
      pipe.setCollider("rectangle", 0, 0, 84, 525);
      pipe.addAnimation("default", pipebird, pipebirdTwo);
      //pipe.addImage(pipebird);
      pipe.velocity.x = groundSpeed;
      pipes.add(pipe);
      //}

      var center = createSprite(84 + width, pipeH - 300, 1, pipeGap);
      center.setCollider("rectangle", 0, 0, 1, pipeGap);
      center.velocity.x = groundSpeed;
      pipeCenterz.add(center);
    }

    for (var i = 0; i < pipeCenterz.length; i++) {
      if (pidgey.overlap(pipeCenterz)) {
        score = score + 1
        through.setVolume(0.2);
        through.play();
        pipeCenterz[i].remove();
      }
    }

    for (var i = 0; i < pipes.length; i++) {
      if (pipes[i].position.x < -84) {
        pipes[i].remove();
      }
    }


    if (pidgey.overlap(pipes)) {
      pidgeyDeath();
    }

    if (pidgey.position.y + pidgey.height / 2 > 608) { //603 being the ground height, add some pixels for "coverage"
      pidgeyDeath();
      pidgey.position.y = 608 - pidgey.height / 2;
    }
  }
  drawSprites(pipes);
  //drawSprites(pipeCenterz);

  imageMode(CORNER);
  image(ground, groundX, 603);
  //ground was originally drawn with trees and backing, but sprites were covering, so I had to cover the sprite of 
  //the buildings with the ground, thus its placement down here.

  drawSprite(pidgey);
  image(scoreB, 0, 30);
  push();
  fill(77, 62, 23);
  textAlign(CENTER,BASELINE);
  textSize(17);
  //textFont("Verdana")
  textFont(myFont)
  text(score, 96, 60);
  //text(score, 95, 61);
  pop();
  if (gameOver && newGame) {
    imageMode(CENTER);
    image(gameDead, width / 2, height / 5);
    image(tapSpace, width / 2, height / 3);
  }

}

function mousePressed() {
  if (gameOver) {
    startGame();
    pidgey.velocity.y = flapV;
  } else {
    wing.setVolume(0.3);
    wing.play();
    pidgey.velocity.y = flapV;
  }
}

function startGame() {
  newGame = true;
  gameOver = false;
  score = 0;
  updateSprites(true);
  pidgey.position.x = 95;
  pidgey.position.y = height / 2;
  pidgey.velocity.y = 0;
  pipes.removeSprites();
  pipeCenterz.removeSprites();
}

function pidgeyDeath() {
  for (var i = 0; i < pipes.length; i++) {
    pipes[i].velocity.x = 0
  }
  through.stop();
  smack.setVolume(0.3);
  smack.play();
  //updateSprites(false);
  // gameOver = true;
  groundX = groundX
  gameOver = true;

  death = true;
  updateSprites(false);
}