/* block scope */

/* 
    In JS we can use a pair of curly braces to declare a block

    {
        //Block
    }
        Now if a variable/function is only accessible/visible inside a block then it will to having block scope.
        ->if else
        ->while
        ->for
        ->row block
*/

{
    let num = 90;
    console.log(num); //90
}
// console.log(num); //Error