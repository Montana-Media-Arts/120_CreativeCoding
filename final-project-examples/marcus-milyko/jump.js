var jumpTimer = 27;
var phase1 = false;

function charJump() {
  if (phase1) {
    charY -= 8;
  } else {
    charY -= 6;
  }
}

function charJumpTimer() {
  jumpTimer -= 1;
  if (jumpTimer === 0) {
    jump = false;
    jumpTimer = 27;
  }
  if (jumpTimer == 8) {
    phase1 = false;
  }
}