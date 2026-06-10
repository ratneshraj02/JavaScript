/* var */
/*
    Whenever we use a "var" anywhere inside a function the variables get function scope.

    If we use it outside function no matter if it is enclosed in block or not, it will give the variable global scope.

*/
 {
    var a = 10; // Becomes global scope due to var
 }
 console.log(a);
 