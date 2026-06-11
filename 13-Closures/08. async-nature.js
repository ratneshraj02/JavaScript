/* Async Nature of JavaScipt */

/*  
    How JS handle Async operations?

    Javascript is a single threaded language.
    Javascript by default only support synchronus code execution.
 */
/* e.g */
console.log("Start");
for(let i=0; i<10000000000;i++){
    //Some Task
}
console.log("End");

/* 
    Note: The above property of sync code execution only works for operation natively known to javascript.


                            NODE
    
        Person - Ryan Dalh(2009)

        [NODE] -> File System
               -> Process
    
    Now we know runtime alos provides functionlites that can be leveraged by JS, But how JS handle that 

    We have a few question to answer

    Q. We can easily do tasks that take a lot of time to complete without blocking the code flow, How??

 */
/* e.g */
function process() {
    console.log("Start");
    setTimeout(() => {
        console.log("Executed Some Task")
    }, 3000);
    for(let i = 0; i < 100000000000000; i++){
        //Some Task
    }
    console.log("End");
    console.log("TATA");
}
process();

/*
    1. The call stack should be empty i.e no function in the call stack  is left to be executed.
    2. The global code is also done.

 */