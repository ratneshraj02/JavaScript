/* function scope */

/*
    In function, the visibility of a variable/function is just inside the function.

 */
function fun(){
    var x = 10;
    console.log(x);
}

fun();

// console.log(x);
/*
    Here x is accesable inside function or we can say this local to function.
 */