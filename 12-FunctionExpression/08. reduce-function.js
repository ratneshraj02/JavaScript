/* Reduce Function */
/*
    Reduce() function is a higher order function available for array reduce also take a functions f as argument, it one by one goes to every element of the array, say the current element is arr[i].

    reduce() will pass this element of the function f, and accumulate the result of further function calls with this particular result.
*/

const arr = [1, 2, 3, 4, 5, 6];

function sum(prevResult, currResult) {
    return prevResult + currResult;
}

const result = arr.reduce(sum);
console.log(result);