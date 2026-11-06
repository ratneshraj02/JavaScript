/* callback Demo */
/*
    Higher order function those function, which takes a function as arguments. the function that you pass as argument is the callback function.
*/
function fun(x, fn) {
    
   for(let i = 0; i < x; i++){
    console.log(i);
   }
   fn();
}

fun(10, function exec() { //callback
    console.log("I am executed also");
});