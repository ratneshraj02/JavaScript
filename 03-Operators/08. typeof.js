/* typeof() function */

/*
    It returns us a sting which contain the type descriptions of the value.
*/

console.log(typeof(12));  // 'number'
console.log(typeof(true)); //'boolean'
console.log(typeof("abcd")) //'string'

console.log(typeof(undefined));  //undefined
console.log(typeof(null));   //object : special type of number

//eg : 
console.log(typeof(typeof(12))); // 'string'
/*
    Always return typeof is a string the content will be different band on argument parsed.
*/
