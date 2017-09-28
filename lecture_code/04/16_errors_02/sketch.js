/*
The below code will produce the following error;
'Uncaught SyntaxError: missing ) after argument list'

This could be cause by an extra parameter, missing bracket/paranthesis, or missing comma.

In this case, it's a missing comma (',') in line 16.
To fix, add a comma between the x and y parameters in the createCanvas() function.

createCanvas( 400, 400 );
 */

function setup() {
    // missing comma between input parameters
    // should be `( 400, 400 );`
    createCanvas( 400 400 );
    background( 'blue' );
}
