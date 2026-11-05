/*ToNumber() */
/*
    " " = 0
    "0" = 0
    "-0" = 0
    "3.145" = 3.145
    "." = NaN
    "0." = 0
    "123" = 123
    "12 + 3" = NaN
    true = 1
    false = 0
    "009" = 9
    null = 0
    undefined = NaN
    "World" = 0

    Whenever in a number operation we don't have a number, ToNumber() is called. we can use (-) operation to mimic ToNumber().

        a                  b           a,b - variable
    left variable      right variable

    lNum = ToNumber(a);
    rNum = ToNumber(b);

    return = lNum - rNum;

    Subtraction always convert both the operands to a Number.

    e.g :-
        true = 1
        false = 0
        "" = 0
        "0" = 0
        "-0" = 0
        "009" = 9
        "3.145" = 3.145
        null = 0
        undefined = 0
        "0." = 0
        "Hello" = 0
        "abc23" = 0


    console.log(0xf);  // this is a valid hexadecimal number JS can parse it
    console.log("ab32");  //NaN
*/

/*
    [" "] = 0
    ["0"] = 0
    ["-0"] = -0
    [null] = 0
    [undefined] = 0
    [1,2,3] = 0
    [[]] = 0
    [] = 0

*/

console.log(12 - 4);  //8
/*
    Both of them are already a number, so we just subtract
*/


console.log(undefined - 3); //NaN
/*
    undefined is not a valid number, to we make it undergo ToNumber abstract operation.
    ToNumber(undefined) = NaN
        NaN - 2 -> And for any number when you do any operation with NaN it result NaN.
        NaN - 2 = NaN
*/

console.log(null - 5);  //-5
/*
    null is not a valid number, so we make it undergo ToNumber abstract operation.
        ToNumber(null) = 0
        0 - 5 = -5
*/

console.log("132" - 10);  //122
/*
    "132" is string, so we make it undergo ToNumber abstract operation.
    ToNumber("132") = 132
    132 - 10 = 122
*/

console.log("12fd" - 20);  //NaN
/*  
    "12fd" is a string, so we make it undergo ToNumber abstract operation.
    ToNumber("12fd") = NaN; because this string cannot be parsed a number
    NaN - 20 = NaN
*/

/*
console.log(Symbol("123") - 30);  //Cannot convert a Symbol value to a number
    Give typeerror
*/

console.log(4 - true);// 3
/*
    true is boolean, so we make it undergo ToNumber abstract operation
    ToNumber(true) = 1
    4 - 1 = 3
*/

console.log(0xf - 1); //15 - 1 = 14
/*
    "0xf" is a string, but in the starting we have 0x which denotes start of hexadecimal.
    So if we can convert this string to a valid hexadecimal, we will do it
    ToNumber("0xf") = 15
    15 - 1 = 14
*/

console.log("0xz" - 1); //NaN
/*
    "0xz" is having 0x is the start to denote, hexadecimal, but z is not a valid hexadecimal.
    ToNumber("0Xz") = NaN
    NaN -  1 = NaN
*/

console.log("0o11" - 1); //9 - 1 = 8
/*
    "0o11" is a string and became a valid octal number
    ToNumber("0o11") = 9;
    9 - 1 = 8
*/

