/* function scope */

/*
    In function, the visibility of a variable/function is just inside the function.

 */
function fun(){
    var x = 10; // Here x is accessible inside function or we can say this local to function
    console.log(x);
}

fun();