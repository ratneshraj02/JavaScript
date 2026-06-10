/* global scope */
/*
    If a variable is present in a global scope then it is accessable every where in the JS file, But how many ways. One of the way to define variable outside any function or block.

*/

let name = "World";

function greet() {
    console.log("greeting ",name);
}

function fun() {
    console.log("have fun ",name);
}

greet();
fun();