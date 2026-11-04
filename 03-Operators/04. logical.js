//Logic Operator

/*
    For logical operator, the operands are evaluated boolean & then operator are applied.
*/
/*
    AND     &&         Logical AND
    OR      ||         Logical OR
    NOT      !         Logical NOT
    XOR
*/

//e.g

console.log((10 > 5) && (7 < 6));  //false
console.log((10 > 5) || (7 < 6));  //true


/* SHORT CIRCUITING */
/*  
          _AND_                               

    T   (T)   =    T
    T   (F)   =    F
    
    (F)   T   =    F
    (F)   F   =    F
    
    In an AND get if the first input is false than, it doesn't evaluate the second and immediately returns the first input as well as if first input is true than the second input has to be evaluate then second value return.
*/
console.log(10 && 6); //6
console.log(0 && 4); //0
console.log(4 && 0); //0

/*
        _OR_                               

    (T)   T   =    T
    (T)   F   =    T
    
    F   (T)   =    T
    T    F(F) =    F
        
    In OR get if the first value is true, then it doesn't evaluated the second value and immediately return the first value, whenever if the first input is false there if return the second input.
*/
console.log(4 || 0); //4
console.log(6 || 9); //6
console.log(0 || -0); //-0


/* What value are falsy and truthy values in JS? */
/*
    Falsy :-
        null, undefined, NaN, +0, -0, "", '', false
    
    Truthy : - apart from their everything is truthy.
*/


/* 
    If there is a situation where you're bound to return a number, but there is no valid possible number be return then we as NaN.

    e.g : -
        10/3 = 3.333333
        10/NaN = Infinity
        undefined/null=NaN

    Which is the only number is JS, which not equal to itself? - NaN
*/





