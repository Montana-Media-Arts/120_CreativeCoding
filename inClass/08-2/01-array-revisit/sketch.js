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
    frameRate(2);


}

function draw() {

    var idxPlus = (idx + 1) % starArr.length;

    textSize(36)
    text( "idx: " + idx + " - arr: " + starArr[idx], 400, 100);

    var x1 = starArr[idx][0] * 50;
    var y1 = starArr[idx][1] * 50;
    var x2 = starArr[idxPlus][0] * 50;
    var y2 = starArr[idxPlus][1] * 50;

    var returnlocation = randomstick(x1, y1, x2, y2);
    console.log(returnlocation);
    // background(18, 82, 189, 15);
    // location1 = returnlocation[0];
    // location2 = returnlocation[1];
    //
    idx = (idx + 1) % starArr.length;
}

function randomstick(x1, y1, x2, y2) {

    strokeWeight(18);
    stroke(random(255), random(255), random(255));

    line(x1, y1, x2, y2);

    return [x2, y2];
}
