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

console.log("world" + {a : 10});
/*
    "world" is already a Primitive
    {"a":10} -> is not a Primitive, so we call toPrimitive without a hint, means hint = number.
    
    we first call valueOf() an {"a":10} and return same object. then
    we call toString. toString return [object Object] which is a string i.e primitive type

    "world"+[object Object] => world[objectObject]
*/

console.log(10 - {a : 45});
/*
    10 is already a number
    {"a":45} is going to get conveted toNumber and this is an object for object we call 
    toPrimitive with hint number

    first we call valueOf() -> it returns same object {"a":45}, then
    we call toSting() -> it return [object Object] again which give NaN.
    10 - NaN => NaN
*/

let x = {"b" : 90,valueOf(){return 2}, toString(){return "custom"}};
console.log( x - 10);
/*
    x is an object, we need to pass it to toPrimitive with hind number
    we call valueOf() -> It return 2 which is a primitive
    x become 2. 10 is already a number
    2 - 10 = -8

*/