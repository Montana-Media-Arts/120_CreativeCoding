/** VARIABLE SCOPE - LOCAL SCOPE
 *
 * Demonstrating that the variable 'global_var'
 * IS available everywhere.
 */

 // a globally declared variable
let global_var = "I am a global variable";

function setup() {
    createCanvas( 400, 300 );
    text( global_var, 20, 20 );
}

// we can even reference the variable here,
// and we get no errors!
// NOTE: this is not doing anything,
// since we are not actually using the variable.
global_var;
