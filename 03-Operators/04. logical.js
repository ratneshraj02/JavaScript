//Logic Operator

/*
    For logical operator, the operends are evaluated boolean & then operator are applied.
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

console.log(4 && 0); //0
console.log(4 || 0); //4  //short circutting
/*

        SHORT CIRCUTTING

          _AND_                               

    T   (T)   =    T
    T   (F)   =    F
    
    (F)   T   =    F
    (F)   F   =    F
_________________________

        _OR_                               

    (T)   T   =    T
    (T)   F   =    T
    
    F   (T)   =    T
    F   (F)   =    F
*/
//Truthy & Falsy Value

//e.g :
console.log(0 && 4); //0
console.log(0 || 4); //4

console.log(3 && 4);  //4
console.log(3 || 4);  //3

