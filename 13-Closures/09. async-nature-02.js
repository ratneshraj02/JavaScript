
for(var i = 0; i < 4; i++){
    setTimeout(() => {
        console.log("HI");
    }, i*1000);
};

/* Call - console.log(" ") 
            |
            |-> process.stdout.write
*/

/*  
    Disadvantages of Callbacks

    1. callback heel - Inside callback inside callback again inside callback etc.

    2. Inversion of control - If there is some part of code whose control we are passing to someone else, and we don't know how that part would the executed this problem is called inversion of control.
 */