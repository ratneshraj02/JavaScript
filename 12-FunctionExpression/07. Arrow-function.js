/* Arrow function */
/*
    Same as function, there is no need function keyword, assign the variable.

    syntax : 
            dataType varName = (arg1, arg2) => {
                function defination
            }
*/

/* e.g */
const sum = (a, b) => {
    console.log(a+b);
}
/* call same as the function */
sum(12, 12); //24

/* Implict return
    cosnt func = (arg1, arg2) => {
        function defination
    };
*/
/* e.g */
const mul = (a, b) => {
    return a*b;
};