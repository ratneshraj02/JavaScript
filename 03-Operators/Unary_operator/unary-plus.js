/* Unary Plus */
/*
    It tries to convert the variable into a number if it is not already a number.

    It doesn't change the original operand but instead return a converted value.
*/

let x = '20';
let y = +x;
console.log(x, typeof (x)); //string
console.log(y, typeof (y)); //number