/* Callbacks */
/*
    Higher order function those function, which takes a function as arguments. the function that you pass as argument is the callback function.
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
   console.log('I am executed also');
});
/* 
    Once the function done, call stack memory will be empty 
*/