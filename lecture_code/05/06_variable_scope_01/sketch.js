/** VARIABLE SCOPE - LOCAL SCOPE
 *
 * Demonstrating that the variable 'local_var'
 * is not available outside of 'setup()'
 */

function setup() {
    // decalre a variable 'local_var' inside setup()
    let local_var = 3;
    // we can now use "local_var" in here.
    ellipse( local_var, local_var, local_var );
}

// however, if we try to use local let outside of the function
// we will run into an "Uncaught Reference" error.
console.log( local_var );
