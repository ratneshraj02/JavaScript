/* let */
/*
    Whenever be initialise a variable with it always get the scope of enclosing block.

*/
function fun() {
    let y = 8;
    console.log(y);
}
fun();

/*
    let keyword doesn't allow redeclaration
*/
// console.log(y); // y is not defined error

/*
    If we declare, let outsie any block then it doesn't get complete global scope.

    let doesn't allow redeclaration, but var does allows us

    It you intialise a varible with let outside any block then also it will not be accessable completely in the global scope, but if you do with var, it will be.
*/
