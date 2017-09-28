/*
The below code will produce the following error;
'Uncaught SyntaxError: missing ) after argument list'

This could be cause by an extra parameter, missing bracket/paranthesis, or missing comma.

In this case, it's a missing closing paranthesis, ')' in line 16, to the createCanvas function.
To fix, add the closing paranthesis at the end of line 16.

createCanvas( 400, 400 );
 */

function setup() {
    // missing comma between input parameters
    // should be `( 400, 400 );`
    createCanvas( 400, 400 ;
    background( 'blue' );
}
