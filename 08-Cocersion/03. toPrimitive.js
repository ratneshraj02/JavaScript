/* ToPrimitive() */
/*
    This function takes an input argument and try to converts into a non object type(Primitive) if can't covert it can throw error.

    If preferred type is not given, hint="default"

    else if preferred type is string, hint="String"
    else if preferred type is number, hint="Number"
    if hint is default then hint="Number"

    hint- String => ToString(), valueOf()
    hint - Number => valueOf(), toString()
    

                            hint - String
                                 |
                              ToString

        Result is no object                 Result is object
        (return result)
                            result is no object           result is object
                            (return result)                 (throw error)

-------------------------------------------------------------------------------------------------------

                            hint - Number
                                 |
                              valueOf()

        Result is no object                 Result is object
        (return result)
                            result is no object           result is object
                            (return result)                 (throw error) 
*/


/*
    valueOf() and toString() are not abstract operation that means we can call them

    By default toString() on an object return -> [object, object]
    By default valueOf() on an object return same object -> [object, object]

*/

//e.g:
        let a = {"English" : 90};

        console.log(a.toString());  //[object Object]
        console.log(a.valueOf());  //{English: 90}
/*
    for array -> valueOf() -> same array
                 toString() -> print array with brackets.
*/

console.log("World" + {a : 10});
/*
    "World" is already a Primitive
    {"a":10} -> is not a Primitive, so we call ToPrimitive without a hint, means hint = number.
    
    we first call valueOf() an {"a":10} and return same object. then
    we call toString. toString return [object Object] which is a string i.e primitive type

    "World"+[object Object] => World[objectObject]
*/

console.log(10 - {a : 45});
/*
    10 is already a number
    {"a":45} is going to get converted toNumber and this is an object for object we call 
    ToPrimitive with hint number

    first we call valueOf() -> it returns same object {"a":45}, then
    we call toSting() -> it return [object Object] again which give NaN.
    10 - NaN => NaN
*/

let x = {"b" : 90,valueOf(){return 2}, toString(){return "custom"}};
console.log( x - 10);
/*
    x is an object, we need to pass it to ToPrimitive with hind number
    we call valueOf() -> It return 2 which is a primitive
    x become 2. 10 is already a number
    2 - 10 = -8

*/