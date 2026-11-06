/* call back application */

/*
    A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

    The consumer of a callback-based API writes a function that is passed into the API. The provider of the API (called the caller) takes the function and calls back (or executes) the function at some point inside the caller's body. The caller is responsible for passing the right parameters into the callback function. The caller may also expect a particular return value from the callback function, which is used to instruct further behavior of the caller.

    There are two ways in which the callback may be called: synchronous and asynchronous. Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.
 */

/* Problem with callback */
/*
    1. Inversion of Control :
        If there is some part of code whose control we are passing to someone else, and we don't know how that part would the executed this problem is called inversion of control.

    2. Callback hell :
        Inside callback, inside callback again inside callback and so on is called callback hell.

        callback hell is readability problem.
*/

