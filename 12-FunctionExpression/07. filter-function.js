/* Filter() function */
/*
    Filter function is also a higher order function. it also a higher order function. It also loops over the array element there is on special thing about filter i.e the argument function f which we have to pass inside filter should always return a boolean, otherwise output will be converted to a boolean.
    
    Filter loops over array element, passes that element in the argument function and then if the output of this function call is true, then it stores the original element in a new array otherwise doesn't add this this added element to the array.
*/

function oddOrEven(x) {
    return (x % 2 == 0);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(oddOrEven);
console.log(result);