/** VARIABLE SCOPE - LOCAL SCOPE
 *
 * Demonstrating that the variable 'global_var'
 * IS available everywhere.
 */

 // a globally declared variable
var global_var = "I am a global variable";

function setup() {
    createCanvas( 400, 300 );
    text( global_var, 20, 20 );
}

console.log( global_var );
