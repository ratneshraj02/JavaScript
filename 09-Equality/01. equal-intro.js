/*
    What is the different between == and === ?
    Actually both == & === checks the types but the difference is both of them do something different after checking the type.

    so == does type checking and if types are same it calls ===.
    
    === checks types & it types are not same return false.

    The main difference is 
    -> Abstract equality(==) does coercion if types are not same.
    -> Strict equality(===) never does coercion.

note : In JS NaN is the only Primitive Values not equal to itself.  
*/


