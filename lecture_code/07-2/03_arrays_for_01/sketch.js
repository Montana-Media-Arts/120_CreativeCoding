let xPosArr = [ 20, 30, 180, 250, 462 ];

function setup() {
    createCanvas( windowWidth, 400 );
}

let yPos = 0;
function draw() {
    background( 'rgb( 200, 37, 52 )' );
    
    stroke( 255 );
    fill( 'rgb( 100, 255, 0 )' );
    
    for( let idx = 0; idx < xPosArr.length; idx++ ) {
        // draw some boxes!
        rect( xPosArr[idx], yPos, 20, 40 ); 
    }
    
    yPos = (yPos + 1) % windowHeight;  
}