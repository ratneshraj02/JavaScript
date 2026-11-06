/* Map function() */
/*
    Map is higher order function available with array. It takes 'f' a function as an argument it return an array in which every value is actually populated by calling function f with original array element as argument.
*/
//e.g :

function square(num) {
    return num * num; //return square
}

const nums = [1, 2, 3, 4, 5]; //original array
const sq = nums.map(square); //square is a function passed as an argument
console.log(sq); //[ 1, 4, 9, 16, 25 ]

/*
    Every elements of the original array is passed one by one argument function f, whenever is the output of individual elements, we populated that output in an array.

    map internally iterates/loops over every element of the given original array pass that element in the argument function f and then store the returned value inside an array.
*/

console.log("\n------------------------------------------------------------------------\n")

//e.g :

function cube(num) {
    return num * num * num;
}
const cu = nums.map(cube);
console.log(cu);

console.log(
	'\n------------------------------------------------------------------------\n',
);

function addEven(x) {
    if (x % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const oddEven = nums.map(addEven);
console.log(oddEven);

console.log(
	'\n------------------------------------------------------------------------\n',
);

/* When to use maps? */
/*
    In any situation when we have to do an operation on every element of the array map can be a good option.

    e.g : Array of product objects each products object. I want to a product name i can do map then fetch object of each product an that object fetch the object key name and store an array.

    If the function that we are passing in ma takes two arguments then first argument will be accessing the actual value & second argument will be accessing index of that value.
*/
const newArr = [9, 8, 6, 5, 4, 6];

function print(element, idx) {
    return `Element at index ${idx} is ${element}`;
}

/*
    here map is looping over every element and then passing element, index in the function print
*/

const result2 = newArr.map(print);
console.log(result2);
/* Details about sort function */