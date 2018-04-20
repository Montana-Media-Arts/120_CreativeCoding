// Knight vars
var Kvelx = 0;
var Kvely = 0;
var Kposx = 400;
var Kposy = 415;
// zombie vars
var sZoms = [];
var hitdelay = -1;
var Attack = 30;
var damage = false;
// Health bar vars
var Khealth = [];
var maxHealth = 5;
var healthDelay = 1;
// Villagers vars
var Civs = [];
var maxCivs = 5;
var killdelay = -1;
var kill = false;
// animations
var ZanimationX = 45;
var ZanimationY = 46;
var Zwalk = 45;
var CanimationX = 180;
var CanimationY = 46;
var KanimationX = 0;
var KanimationY = 0;
var KIdle = false;
var CIdle = false;
var Ksword = true;

function preload() {
  Bg = loadImage("assets/Background.jpg");
  Sprite = loadImage("assets/Sprite-Sheet.png");
  // Music = loadSound('assets/8_Bit_Music.mp3');
}

function setup() {
  createCanvas(1920, 720);
  // Music.play();


  for (var i = 0; i < 2; i++) {
    sZoms.push(new Zombie(random(400, 1920), floor(random(1,2))));
  }
}


function draw() {
  push();
  image(Bg, 0, 0, width, height) * scale(-1, 0);
  pop();

  fill(22, 32, 17);
  textSize(32);
  text("ARROW KEYS TO MOVE", 100, 600, 500, 200);
  text("SHIFT TO ATTACK", 100, 650, 400, 200);
  text("Defend The Villagers!", 900, 600, 500, 400);

  // health
  for (var h = 0; h < maxHealth; h++) {
    Khealth.push(new Health(h * 50));
  }

  // make Citizens
  for (var c = 0; c < maxCivs; c++) {
    Civs.push(new Citizen(c * 80, 416));
  }

  // slows Knight Down
  if (frameCount % 2 == 0) {
    if (Kvelx > 0) {
      Kvelx -= 1;
    } else if (Kvelx < 0) {
      Kvelx += 1;
    }
  }

  // Stops at edges
  if (Kposx >= 1800) {
    Kvelx = 0;
    Kposx = 1800;
  } else if (Kposx <= 20) {
    Kvelx = 0;
    Kposx = 20;
  }
  if (Kposy < 415) {
    if (Kvely > -18) {
      Kvely -= 1;
    }
  } else if (Kposy > 415) {
    Kvely = 0;
    Kposy = 415;
  }
  Kposy -= Kvely;


// Game Over
  if ((maxHealth <= 0) || (maxCivs <= 0)) {
    fill(0);
    textSize(50);
    text("GAME OVER", width / 2 - 200, height / 2);
    KanimationX = 0;
    KanimationY = 46;
    noLoop();
    if (keyIsDown(SHIFT)) {
      KanimationX = 0;
      KanimationY = 46;

    }else if (!keyIsDown(SHIFT)) {
      KanimationX = 0;
      KanimationY = 46;
    }
    if (keyIsDown(LEFT_ARROW)) {
      KanimationX = 0;
      KanimationY = 46;
    }if (keyIsDown(RIGHT_ARROW)) {
      KanimationX = 0;
      KanimationY = 46;
    }if (keyIsDown(UP_ARROW)) {
      KanimationX = 0;
      KanimationY = 46;
}
}
// unused Idle for Knight
// if (!keyIsDown(RIGHT_ARROW||LEFT_ARROW||UP_ARROW||SHIFT)) {
//
//   if (frameCount % 20 == 0) {
//     KIdle = !KIdle;
//   }
//   if (KIdle) {
//     KanimationX += 60;
//   } else if (!KIdle) {
//     KanimationX = 0;
//   }
// }

// Control Knight
  if (keyIsDown(RIGHT_ARROW)){

    Kvelx = 4;
  Kposx += Kvelx;
  if (frameCount % 10 == 0) {
    KanimationX += 60;
    if (KanimationX >= 360) {
      KanimationX = 120;
    }
  }
}
 if (keyIsDown(LEFT_ARROW)){
    Kvelx = -4;
  Kposx += Kvelx;
  if (frameCount % 10 == 0) {
    KanimationX += 60;
    if (KanimationX >= 360) {
      KanimationX = 120;
    }
  }
}
  // KanimationX += 60;
  if (keyIsDown(UP_ARROW)) {
    if (Kposy > 410) {
      Kvely = 18;
      KanimationX = 0;
    } else if (Kposy < 410) {
      KanimationX = 180
    }
  }
  if (keyIsDown(SHIFT)) {
    hitdelay++;
    if (hitdelay % 20 == 0) {
      if (Ksword){
          KanimationX = 420;
          Ksword = false
      }else if (!Ksword) {
        KanimationX += 60;
        if (KanimationX == 540) {
            KanimationY += 46;
            if ((KanimationX >= 540)&&(KanimationY >=46)) {
                KanimationX = 0;
                KanimationY = 0;
                Ksword = true;
            }
        }
      }
    }
  } else if (!keyIsDown(SHIFT)) {
    hitdelay = -1;
    if (!Ksword) {
    KanimationX += 60;
    if (KanimationX == 540) {
        KanimationY += 46;
        if ((KanimationX == 540)&&(KanimationY ==46)) {
            KanimationX = 0;
            KanimationY = 0;
            Ksword = true;
          }
  }
}
}
  image(Sprite, Kposx, Kposy, 180, 135, KanimationX, KanimationY, 60, 45);

  // spawn new zombies
  if (sZoms.length <= 20) {
    if (frameCount % 100 == 0) {
      sZoms.push(new Zombie(random(width, width + 200), floor(random(1,2))));
    }
  }
  // checking for zombie attack
  for (var i = 0; i < sZoms.length; i++) {
    sZoms[i].display();
    if (dist(Kposx, Kposy, sZoms[i].Zposx, sZoms[i].Zposy) < 30) {
      if (!damage) {
        damage = true;
        Khealth.splice(0, 1);
        maxHealth--;
      }
    }
    if (damage) {
      healthDelay++;
      if (healthDelay % 50 == 0) {
        damage = false;
        healthDelay = 1;
      }
    }
    if (maxCivs > 0) {
      if (dist(200, 415, sZoms[i].Zposx, sZoms[i].Zposy) <= 100) {
        if (!kill) {
          kill = true;
          Civs.splice(0, 1);
          maxCivs--;
        }
      }
      if (dist(Kposx, Kposy, sZoms[i].Zposx, sZoms[i].Zposy) <= 120) {
        if (keyIsDown(SHIFT)) {
          if (hitdelay % 40 == 0) {
            sZoms.splice(i, 1);
          }
        }
      }
      if (kill) {
        killdelay++;
        if (killdelay % 50 == 0) {
          kill = false;
        }
      }
    }
  }
}

// Zombie
function Zombie(Zinitposx, Attack) {
  this.Zvelx = 0;
  this.Zvely = 0;
  this.Zposx = Zinitposx;
  this.Zposy = 415;
  this.attack = Attack;

  this.display = function() {

    image(Sprite, this.Zposx, this.Zposy, 180, 135, ZanimationX, ZanimationY, 45, 45);
    if (frameCount % 15 == 1) {
      ZanimationX += Zwalk;
      if (ZanimationX >= 135 || ZanimationX <= 45) {
        Zwalk *= -1;
      }
    }
    // console.log(ZanimationX);
    if (this.attack == 1){

    if (this.Zposx > Kposx) {
      this.Zvelx = -2;
      this.Zposx += this.Zvelx;


    } else if (this.Zposx < Kposx) {
      this.Zvelx = 2;
      this.Zposx += this.Zvelx;

    }
  }
   if (this.attack == 2) {
    this.Zvel = -2;
    this.Zposx += this.Zvelx;
  }


  };
}

// health Bar
function Health(hpX) {
  fill(255, 0, 76);
  triangle(50 + hpX, 59, 91 + hpX, 58, 70 + hpX, 85);
  arc(60 + hpX, 60, 20, 20, PI, 0, OPEN);
  arc(80 + hpX, 60, 20, 20, PI, 0, OPEN);
}

function Citizen(citX, citY) {
  this.CposX = citX + 180;
  this.CposY = citY;
  if (frameCount % 20 == 0) {
    CIdle = !CIdle;
  }
  if (CIdle) {
    CanimationX = 240;
  } else if (!CIdle) {
    CanimationX = 180;
  }
  image(Sprite, this.CposX, this.CposY, 180, 135, CanimationX, CanimationY, 60, 45);
}
