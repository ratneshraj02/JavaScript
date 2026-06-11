/* Promise API */
/*
    There are 6 static methods of promise

    1. Promise.all(Promises):
        Waits for all promises to resolve and returns the array of their results. If any one fails, it becomes the error & all other results are ignored.
    2. Promise.all setted(Promises) : 
        Waits for all the promises to settle and retuns their results as an array returns as an array of objects with status and value.

    3. Promise.rach(Promises) : 
        Waits for the first promises to settle and its result/error becomes the outcome.

    4. Promise.any(Promise) : 
        Waits for the first promise to fullfilled, and its result becomes the outcome, throws arrregate error if all the promises rejected.
    5. Promise.resolve(value):
        Make promise with the given value
    6. Promise.reject(error): 
        Makes a rejected promise with the given error.
 */
