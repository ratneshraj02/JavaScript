/* let */
/*
    Whenever be initializes a variable with it always get the scope of enclosing block.

*/
function fun() {
    let y = 8;
    console.log(y);
}
fun(); //8

/*
    let keyword doesn't allow redeclaration
*/
// console.log(y); // y is not defined error

/*
    If we declare, let outside any block then it doesn't get complete global scope.

    let doesn't allow redeclaration, but var does allows us

    It you initializes a variable with let outside any block then also it will not be accessible completely in the global scope, but if you do with var, it will be.
*/
