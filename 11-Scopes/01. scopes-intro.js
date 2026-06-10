/*
    What do we mean by the word Scope?
    In simple word scope is simply where to look for thing.

    what are looking for?? we are look for variable and function.

    we have more or less 3 types of scope in JS.
    1. Globel Scope
    2. Function Scope
    3. Block Scope

 */

var fun = 10;
function gun() {
    console.log(fun);
    console.log("Hello World!");
}

gun();
