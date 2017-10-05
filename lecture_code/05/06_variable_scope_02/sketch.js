/** VARIABLE SCOPE - LOCAL SCOPE
 *
 * Demonstrating that the variable 'global_var'
 * IS available everywhere.
 */

 // a globally declared variable
 var global_var = 30;

 function setup() {
     createCanvas( 400, 300 );
     background( global_var );
 }

 function draw() {
     ellipse( global_var, global_var, global_var );
 }

 console.log( global_var );
