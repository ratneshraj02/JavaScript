/* Function */
/*
    DRY Principle :- Don't Repeat Yourself

    To Rectify this we have Functions, It is block of code, that is take some input and return output.

    We have 2 choice 
        1. We have to create own functions
        2. we can consume other functions.

    Now if we use function, then we can store our login inside a function, and doesn't matter how many times you want to use it, you will just call the function.
*/


/*
    function <name>(arg1, arg2) {
    
    
        return x; // If we don't put return auto return undefined.
    }
Return keyword return an output out of the function immediately stop the function execution.
*/

//e.g :

function print(name) {
    console.log(`Welcome ${name}`);
}

print("Hello World");
