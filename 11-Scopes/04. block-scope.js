/* block scope */

/* 
    In JS we can use a pair of curly braces to declar a block

    {

        //Block

    }
        Now if a varible/function is only accessable/visible inside a block then it will to having block scope.
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