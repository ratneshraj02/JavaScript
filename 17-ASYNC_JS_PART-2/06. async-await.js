/* Async & Await */

/*
    There is special syntax to work with promises in Javascript as function. A function can be made async by using async keyword like this 
*/
async function fun() {
    return 1;
}

/*
    As async functions always returns a promise other values are warped in a promise automatically

    we can do something like this
 */
hello().then(alert);

/*
    So, async ensures that the function returns a promise and warp non promises in it.
*/

/* await keyword */
/*
    There is another keyword called await that works only inside async functions

    The await keyword makes JS wait until the promise settle and return its value.

    It just a more elegant syntax of getting the promise result than promise then add its easier to read & write.
 */

    let value = await promise;