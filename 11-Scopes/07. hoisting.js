/* Hoisting */
gun(); //Shoot
function gun() {
    console.log("Shoot");
}
console.log("_______________________________________________________________");

/* 
    Hoisting is a direct consequence of lexical parsing that happens in JS, due to while we are able to access some function & variable before declaring them. which gives us a notion that they are moved up in the file.
*/

/* Corner Case hoisting */
console.log(x); //undefined
var x = 10; 

/*
    console.log(y); // Error    
    let y = 18;
*/
