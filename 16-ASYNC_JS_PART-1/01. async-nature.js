/* Async Nature of JavaScript */

/*  
    How JS handle Async operations?

    Javascript is a single threaded language.
    Javascript by default only support synchronous code execution.
 */
/* e.g */
console.log("Start");
for(let i=0; i<10000000000;i++){
    //Some Task
}
console.log("End");

/* 
    Note: The above property of sync code execution only works for operation natively known to javascript.

                    JS Runtime
            \-----------------------/
            \                       /       Browser =>  Dom APIs
            \          JS           /                   setTimeout()
            \                       /                   setInterval()
            \-----------------------/


                            NODE
    
        Person - Ryan Dahl(2009)

        [NODE] -> File System
               -> Process
    
    Now we know runtime also provides functionalities that can be leveraged by JS, But how JS handle that 

    We have a few question to answer

    Q. We can easily do tasks that take a lot of time to complete without blocking the code flow, How??

 */


/*
    The condition to start executing tasks from event queue is that.

    1. The call stack should be empty i.e no function in the call stack  is left to be executed.

    2. The global code is also done.
*/
