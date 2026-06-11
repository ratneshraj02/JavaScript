/* Callbacks */

/*
    A callback is a function that is passed to another function.
*/

function fun(x, fn) {
    /*
        x - number
        fn - callback function
    */
    //some logic

    for(let i = 0; i <= x; i++) {
        console.log(i);
    }
    fn(); // calling the callback function passed.
}

fun(10, function log(){
    // this is the callback function
    console.log("custom logger");
});
/* 
    Once the function done, call stack memory will be empty 
*/