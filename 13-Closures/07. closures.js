/* Closures */

/*
    Closures is when a function  remembers it's lexical scope even when the function is executed outside that lexical scope.

    If todo is completed it will be removed from callstack how actually the vauable stall perist?

    Where are they??
 */
/* e.g */
function fun(task1, task2) {
    task1 = "Hello World";
    
    setTimeout(function (){
        console.log(`Completed ${task1}`);
    },2000);
    task1 = task2;
    task2 = "assign";
};
fun("12", "34");

/* e.g */
function test(){
    for(var i = 0; i < 3; i++){
        setTimeout(function (){
            console.log(`i : ${i}`);
        }, i * 1000);
    };
};