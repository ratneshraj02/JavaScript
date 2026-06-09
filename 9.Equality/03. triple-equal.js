/*
-> Strict equality(===) never does coersion.
*/

//e.g : 
console.log(23 === NaN);  //false
console.log(23 === 23); //true
console.log(NaN === 23); //false
console.log(33 === 23); //false
console.log(0 === -0); //true
console.log(-0 === 0); //true
console.log(undefined === undefined);  //true
console.log(null === null) //true
console.log("sanket" === "sanket");  //true
// console.log({ } === {}); //false

let x = {};
console.log(x === x); //true

console.log(Symbol("Hello") === Symbol("Hello"));  //false

let y = Symbol("Hello");
console.log(y === y); //true

