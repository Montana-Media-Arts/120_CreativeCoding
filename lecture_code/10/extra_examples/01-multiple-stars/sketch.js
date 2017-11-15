var location1 = 10;
var location2 = 10;


var starArr = [
    [5, 0],
    [7, 11],
    [0, 4],
    [10, 4],
    [3, 11]
];
var idx = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(18, 82, 189);
    // frameRate(20);


}

function draw() {

    background(18, 82, 189, 30);

    var randomSize = random(10, 40);
    var randomX = random(width);
    var randomY = random(height);


    drawStar(starArr, randomSize, randomX, randomY);

}


function drawStar(starArray, size, loc_x, loc_y){

    // set the location of the star
    translate(loc_x, loc_y);

    // create a random color for the whole star
    var col = color( random(255), random(255), random(255) );

    // draw all five lines of the star
    for (var idx = 0; idx < starArray.length; idx++) {

        // Ensure we loop back around to idx=0
        var idxPlus = (idx + 1) % starArr.length;

        // extract the locations for each point
        var x1 = starArray[idx][0] * size;
        var y1 = starArray[idx][1] * size;
        var x2 = starArray[idxPlus][0] * size;
        var y2 = starArray[idxPlus][1] * size;

        // draw a stick
        randomstick(x1, y1, x2, y2, col);

    }
}


function randomstick(x1, y1, x2, y2, col) {

    strokeWeight(10);
    stroke(col);

    line(x1, y1, x2, y2);

    return [x2, y2];
}
