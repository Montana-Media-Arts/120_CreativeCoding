function setup() {
    createCanvas(400,400);

    // Logical AND
    // if( 3 > 2 && 2 === "2" ){
    //     background(0, 255, 0);
    //     text("true", 200, 200);
    // } else {
    //     background(255, 0, 0);
    //     text("false", 100, 100);
    // }


    // Logical OR
    if( 3 > 2 || 2 === "2" ){
        background(0, 255, 0);
        text("true", 200, 200);
    } else {
        background(255, 0, 0);
        text("false", 100, 100);
    }
}

function draw() {

}
