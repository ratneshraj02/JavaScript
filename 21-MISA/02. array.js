
/* Array */
/*
    Linear collection of things, it can stored different types datatype in a single array.


    syntax :-
        variableName = [" ", " ", " ", " ", " "];
*/

let colors = ['Pink', 'Red', 'Blue', 'White', 'Yellow'];
let nums = [1, 2, 3, 4, 5, 6];

console.log(colors.length);
console.log(nums.length);

/* accessing element */
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log(nums[4]);
console.log(nums[5]);

/* Array are mutable */
/*
    While applying any method on array then the array gets edited, means that new array get not created the original array changed.
*/

/* we can store any element at any index */
colors[10] = "Black";
console.log(colors);
// [ 'Pink', 'Red', 'Blue', 'White', 'Yellow', <5 empty items>, 'Black' ]


/* override the value at index */
colors[8] = "Brown";
console.log(colors);

/* Array Method */


/* push() : add to end */
let name = ["World", "Hello",];
name.push("Hii");
console.log(name); //[ 'World', 'Hello', 'Hii' ]

/* pop() : del from end */
name.pop();
console.log(name); //[ 'World', 'Hello' ]

/* unshift() : add element to start index */
name.unshift("Thanks");
console.log(name); //[ 'Thanks', 'World', 'Hello' ]

/* shift() :- Del element from start */
name.shift();
console.log(name); //[ 'World', 'Hello' ]

/* indexOf() : Return index of element */
console.log(colors.indexOf("Yellow")); //4
console.log(colors.indexOf("Red"));  //1

/* includes : search for a value */

console.log(colors.includes("Red")); // true
console.log(colors.includes("Yellow")); //true
console.log(colors.includes("Green")); //false

/* concat() : merge two array */

let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green"];
console.log(primary.concat(secondary)); //[ 'red', 'yellow', 'blue', 'orange', 'green' ]

/* reverse() :- Reverse an array */
console.log(primary.reverse()); //[ 'blue', 'yellow', 'red' ]
console.log(secondary.reverse());// [ 'green', 'orange' ]

/* slice(arg) : soft copy of the original array */
let newNum = [1, 2, 3, 4];
console.log(newNum); //[1, 2, 3, 4]

let num1 = [1, 2, 3, 4, 5];
let partNum = num1.slice(2);
console.log(partNum); //[ 3, 4, 5 ]

/* Splice() */
/*
    Remove/Replace/add items in Place

    e.g :-
        splice(start, deleteCount, item0........itemN)
*/

let num3 = [1, 2, 3, 4, 5];
console.log(num3.splice(4));


num3.splice(0, 1);
/*
    start       end
    [delete]    [exclusive]
*/


num3.splice(2, 0, "red", "grey");
console.log(num3);

console.log(num3.slice(2, 3, 8, 9));

/* sort() */
/*
    Sort items if string is there it will be ascending, descending and alphabetical order.

    The number are not sorted by ascending or descending order because sorting is done by string precedence.

    so, mostly we use sort() for either strings or characters.
*/

let name1 = ["abc", "xyz", "bmw"];
name1.sort(); //
console.log(name1); //[ 'abc', 'bmw', 'xyz' ]

let character = ['a', 'c', 'd', 'b'];
character.sort();
console.log(character); //[ 'a', 'b', 'c', 'd' ]


/* Array References */
/*
    Address in Memory

    [1] === [1] // false
    [1] == [1] // false

    If there is a string & we are comparing the string then are compared on the basis of their values.

    e.g :   "name" == "name" is true

    If there is an array then the arrays are compared on the basis of their references means address where, they are stored, so if we want to get equal value then we have to store value we have to store variable of array in same, because every variable stores the address of array, not the value of array.
*/

let arr = ['a', 'b', 'c'];
let arrCopy = arr;

console.log(arr == arrCopy); //true
console.log(arr === arrCopy); //true

/* Constant Arrays */
/*
    As this is depend upon the address value so , we con't change the overall array but the array can be edited after making it constant.
*/

const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); //[ 1, 2, 3, 4 ]

arr1.pop();
console.log(arr1); //[ 1, 2, 3 ]


/* Nested Arrays */
/*
    Array under array, multidimensional array.
*/

let multiNum = [
    [1, 2],
    [2, 3],
    [3, 4],
];

console.log(multiNum[0]); //[, 2]
console.log(multiNum.length); //3

console.log(multiNum[0][1]); //3
console.log(multiNum[1][0]); //2
console.log(multiNum[2][2]); //2