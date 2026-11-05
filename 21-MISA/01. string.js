/* String */
/*
    String are text or sequence of character.

    e.g :-
*/
let name = "Ratnesh";
let num = '23';
let emptyString = "";


/* String Indices */
/*
    R a t n e s h
    0 1 2 3 4 5 6
*/


/* accessing element of String */
console.log(name[0]);
console.log(name[1]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

/* To find out length of String */
console.log(name.length);

/* Another method to access element */
console.log(name[name.length - 1]);
console.log(name[name.length - 2]);
console.log(name[name.length - 3]);


/* String concatenation : Adding string together */
console.log("tony" + " " + "stark");


/* template literals */
/*
    They are used to add embedded expression in a string.
*/

let number = 20;
console.log(`This a number ${num}`);

/* String Method */
/*
    Method are actions that can be performed on object. Her are some method will only applicable on string.

    syntax :-
        <string>.method();
*/

/*
    trim() :-
        Trim removes whitespaces from both end of string & start return new one.
*/

let msg = "  Hello  ";
console.log(msg.trim()); // Hello

/* String are Immutable in JS */
/*
    Whenever we do try to make a change, a new string is created and dit one remains same.
*/

/* toLowerCase() */
let str = "HELLO";
console.log(str.toLowerCase()); //hello

/* toUpperCase() */
let str1 = 'hello';
console.log(str1.toUpperCase()); //HELLO

/* String Method with Argument */
/*
    Arguments are a same value that we pass to the method, arguments are passed for making changed.

    syntax : -
        <string>.method(argument);
*/

/* indexOf(arg) */
/*
    This method is used for index searching.
*/
let str2 = "I Love Coding";
console.log(str2.indexOf("L"));
console.log(str2.indexOf("C"));
console.log(str2.indexOf("o"));

/* Slice() */
/* 
    Return a fragment part of the original string as new string.

    syntax :-
        string.slice(start, end);
*/

console.log(str2.slice(7)); //Coding
console.log(str2.slice(2, 6));//Love
console.log(str2.slice(-2)); //ng


/* replace(arg1, arg2) */
/*
    searches a value in the string & return a new string with the value replaced.

    syntax :-
        string.replace("fromValue", "toValue");
*/

let str3 = "ILoveCoding";
console.log(str3.replace("Love", " do "));

/* repeat() */
/*
    Repeat to the number of arguments given
    syntax :-   
        string.repeat(number);
*/

let str4 = "apple";
console.log(str4.repeat(4));//


/* Method Chaining */
/*
    Using one method after another. Order of execution will be left to right.
*/

let msg1 = "  red ";
let newMsg = msg1.trim().toUpperCase();
console.log(newMsg);//RED











