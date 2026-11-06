/* Sort() function */

let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 15, 2, 3]; //unsorted array
arr.sort(); // it sort the given array

//default implementation of arr.sort() going to sort my array in lexicographical order.
console.log(arr); //[1, 10, 100, 1000,11, 12,  13,   14, 15,  2,   3,    9]

/* Details about sort function */

let b = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 15, 2, 3];
//sort b in increase order

b.sort(function (a, b) {
    //If a<b - a-b will be negative, if function gives negative than a is place before b (a<b)

    //If a > b - a - b will be positive, if function gives positive then b is place before a (a > b)

    // return a - b;

    //sort is a HOF, the sort function takes a comparator function as argument
});