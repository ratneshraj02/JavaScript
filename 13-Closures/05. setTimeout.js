/*
    setTimout();

        setTimout(task callback, timing in milesecond);
 */
/* e.g */
setTimeout(function (){
    console.log("Hello World");
}, 2000);

setTimeout(function (){
    console.log("Task completed");
}, 4000)
console
/* 
    It return a unique id - with the help of id clear time.
                                                clearTimeout(id);
*/
/* e.g */

let id1 = setTimeout(function (){
    // some task
    console.log("Task Completed - 1");
}, 10000);

let id2 = setTimeout(function (){
    //some task
    console.log("Task Completed - 2");

    clearTimeout(id1);
}, 5000);
