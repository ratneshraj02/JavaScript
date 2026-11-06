/* Error Handing */
/*
    We all made mistakes. Also sometimes out scripts can have error usually a program halts when an error occurs.

    The syntax try... catch allows us to catch error so that the script instead of dying can do some thing more reasonable.

 */

/* The try.... catch syntax */
/*
    The syntax try... catch has two main blocks
        try & catch
 */

    try {
        // try the code
    } catch (error) {
        //error handing
    }

    /* It works like this */
    /*
        1. First the code in  try is executed
        2. If there is no error, catch is ignored else catch is executed.
        3. try & catch works synchronously.

        If an exception happens in scheduled code, like in setTimeout, then try... catch won't catch it.

    */
   try {
        setTimeout(function fun(){ 
            //error code  -> script dies & catch won't work
        }, 1000);
    
   } catch (error) {
    
   }
/* 
   That's because the functions itself is executed later, when the engine has already left the try... catch construct.
 */

/* The error object */
/* 
   For all the build in error, the error object has two main properties
 */
try {
    world; // error variable not defined.
} catch (error) {
    alert(error.name);
    alert(error.message);
    alert(error.stack);
}

/* Throwing custom error */
/* 
    We can throw our own error by using the throw syntax.

 */
if(age > 180) {
    throw new Error("Invalid age");
}

/* 
    We can also throw a particular error by using the built in constructor for standard errors.
 */

    let error = new SyntaxError(message);
                        //or
                new ReferenceError(message);


/* The finally Clause */
/*
    The try... catch construct may have one more code clause: finally.
    It is exists it runs in all cases
    After try if there were no error after catch if there were error. If there is a return in try, finally is executed just before the outer code.
 */