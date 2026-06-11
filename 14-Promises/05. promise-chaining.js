/* Promises Chaining  */
/*
    We can chain promises and make them pass teh resolved values to one another like this.

    p.then(function (result) => {
        alert(result); return 2;
                ........
                ........

    The idea is to pass the result throught the chain of .then handlers.

 */

/*
    Here is the flow of execution 

    1. The initial promise resolves in 1sec (assumption).
    2. The next .then() handler is then called, which returns a new promise (resolved with 2 value)
    3. The next .then() gets the result returns a new promise whose value is passed to the next one and so on. We can even crate custom promises inside .then()
 */

/* Attaching multiple handlers */
/*
    We can attach multiple handlers to one promise. they don't pass the result to each other; instead they process it independenlty.

    let p is a promise

    p.then(handler1) ------>|
    p.then(handler2) ------>|
    p.then(handler3) ------>|
                            |---> Runs Indepently
 */

