function setup() {
    createCanvas( windowWidth, 300 );
    // adjust text display
    textSize(36);
    textAlign(CENTER,CENTER);
}

let searchNum = -10000;

function draw() {

    if( searchNum != 0 ) {
        background( random(255), random(255), random(255) );
        text("searching for 0...", width/2, height/2);

        // get a new number to try next time
        searchNum = floor(random(200));
    } else {
        background( 'pink' );
        // after finding a random 0, celebrate
        text("Found a random 0!!!", width/2, height/2);
        text("click the mouse to try again", width/2, height*0.75);
    }
}

// a mouse event to run it again
function mousePressed() {
    searchNum = -1000;
}
