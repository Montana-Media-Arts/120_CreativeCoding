function setup(){
    createCanvas( windowWidth, 400 );
    frameRate(1);
}

function draw() {
    background( 'rgb(91, 255, 147)' );

    // create numbers to pass our function
    let num1 = floor(random(0, 100));
    let num2 = floor(random(0, 100));
    // call our newly defined function
    addThings( num1, num2 );
}

// Our newly defined function
function addThings( value1, value2 ) {
    // 1. Add the values together. Store them into some variable.
    let result = value1 + value2;

    // 2. Print the results as a string to the canvas.
    result = "The result of adding '" + value1 + "' and '" + value2 + "' is '" + result + "'.";
    textSize(18);
    textAlign( CENTER );
    text( result, width/2, height/2 );
}
