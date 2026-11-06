/* global scope */
/*
    If a variable is present in a global scope then it is accessible every where in the JS file, But how many ways. One of the way to define/declare variable outside any function or block.

*/

let name = "World";

function greet() {
    console.log("greeting ",name);
}

function fun() {
    console.log("have fun ",name);
}

greet(); //greeting World
fun(); //have fun World