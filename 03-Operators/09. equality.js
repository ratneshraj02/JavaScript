/* Equality Operator */

/*
    == - abstract equality operator
    === - strict equality operator


    == :-
        It checks the type of both operand, if the type is same, then it calls ===.
        If type are not same the type conversion occur and then comparison occur.

    === :-
        It also checks type of both the operand if types are different if return false.

        If types are same then value companion happens.
*/

console.log(1 == '1'); // true
console.log(1 == 'Ratnesh'); //false