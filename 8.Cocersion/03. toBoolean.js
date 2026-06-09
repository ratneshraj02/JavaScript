/*  
        LIST OF FALSY VALUES:
                                null
                                undefined
                                +0
                                -0
                                NaN
                                " " - empty string
                                false
    
    If we get any one of these values in he argument we return false else we return True.
*/

/*
    How can use test the Boolean Operation?
    we can use logical NOT(!) operator.

    !a = oldValue = toBoolean

    if(oldValue is True)
         return false
    else
        return True

    consoel.log(!0);
*/
//e.g:
/*
console.log(!0); //true
*/

console.log(!(-4));  //false
/*
    -4 = truthy
        toBoolean(-4) = true
    !(true) => false
*/

console.log(!{});
/*
    {} = truthy
     toBoolean({}) = true
     !(true) => false
*/

console.log(!console.log(0)); //true
/*
    0 = falsy
    toBoolean(0) = false
    !(false) => true
*/

