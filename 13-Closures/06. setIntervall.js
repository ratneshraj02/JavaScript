/* setInterval()
    
    Same as the setTimout() it has also unique id.

*/
/* e.g */
    setInterval(function (){
        console.log("Task done again");
    }, 3000);

/* e.g */
let id = setInterval(function (){
    console.log("Task done again");
}, 3000);
setTimeout(function (){
    clearTimeout(id);
}, 13000);


/* e.g */
    function todo(task) {
        setTimeout(function(){
            console.log("completed task");
        }, 2000);
        
    }
    console.log("Starting"); //Starting
    todo("assignment"); // completed task after 2sec
    console.log("done"); //done

/*
    At the time istance when function fun will be called, the "todo" function is already over.

    If fun is called after the completion of todo, & todo has ended, how fun is able to access "task variable"

    This happens due to closures.
 */   
