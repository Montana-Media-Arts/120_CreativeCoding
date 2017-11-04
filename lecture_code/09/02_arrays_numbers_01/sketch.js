let circles = {
    diam: [ 20, 400, 150 ],
    pos: [ 40, 150, 250 ],
    idx: 0
};
circles.numCircles = circles.diam.length;

function setup() {
   createCanvas( windowWidth, 400 );
   frameRate( 1 );
}

function draw() {
    background( 'rgb(30, 200, 120)' );
    
    fill( 'rgb(230, 30, 120)' );
    ellipse( 
        circles.pos[circles.idx],
        circles.pos[circles.idx],
        circles.diam[circles.idx]
    );
    
    circles.idx = ( circles.idx + 1 ) % circles.numCircles;
}
        
    